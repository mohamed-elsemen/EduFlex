const path = require('path');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
const ffprobe = require('ffprobe');
const ffprobeStatic = require('ffprobe-static');

const Course = require('../models/Course');
const throwCustomError = require('../errors/custom-error');

// Local Utility Functions

const checkCoursePermissions = async (courseId, userId) => {
  const course = await Course.findById(courseId);
  if (!course) {
    throwCustomError(`Could not find a course with ID: ${courseId}`, 404);
  }
  if (!course.instructor.equals(userId)) {
    throwCustomError(
      'Unauthorized!, only the instructor who created this course can modify it.',
      403
    );
  }
  return course;
};

const formatDuration = (durationString) => {
  const durationInSeconds = parseInt(durationString);

  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  // padStart  is used to add leading zeros until it reaches the specified length (2)
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return `(${formattedMinutes}:${formattedSeconds})`;
};

// Controller Functions

const createCourse = async (req, res, next) => {
  if (!req.files) {
    throwCustomError('No file uploaded', 400);
  }

  const { courseImage } = req.files; // courseImage is the field name front-end needs to provide!
  if (!courseImage.mimetype.startsWith('image')) {
    throwCustomError('Please upload an image', 400);
  }

  const maxSize = 1024 * 1024 * 5; // 5MB
  if (courseImage.size > maxSize) {
    throwCustomError('Please upload an image smaller than 5MB', 400);
  }

  const imageName = uuidv4() + '-' + courseImage.name;
  await courseImage.mv(
    path.join(__dirname, '..', 'public', 'images', imageName)
  );

  const courseData = {
    ...req.body,
    imageUrl: `images/${imageName}`,
    status: 'Pending',
    instructor: req.user.userId,
  };

  const course = await Course.create(courseData);
  res.status(201).json({
    message:
      "Course has been created successfully, and is now pending admin's approval!",
    course,
  });
};

const addSectionToCourse = async (req, res, next) => {
  const {
    params: { courseId },
    user: { userId },
    body: { sectionTitle },
  } = req;
  const course = await checkCoursePermissions(courseId, userId);
  const newSection = { title: sectionTitle, videos: [] };
  course.sections.push(newSection);
  await course.save();
  res.status(201).json({
    message: 'Section has been added to the course successfully!',
    sections: course.sections,
  });
};

const updateSectionTitle = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex },
    user: { userId },
    body: { sectionTitle },
  } = req;
  const course = await checkCoursePermissions(courseId, userId);
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }
  course.sections[sectionIndex].title = sectionTitle;
  await course.save();
  res.status(200).json({
    message: `Section title at index ${sectionIndex} has been updated successfully!`,
    sections: course.sections,
  });
};

const deleteSectionFromCourse = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex },
    user: { userId },
  } = req;
  const course = await checkCoursePermissions(courseId, userId);
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }
  // Remove all video references from this section before deleting it
  for (const video of course.sections[sectionIndex].videos) {
    const videoPath = path.join(__dirname, '..', video.videoUrl);
    fs.unlinkSync(videoPath);
  }
  course.sections.splice(sectionIndex, 1);
  await course.save();
  res.status(200).json({
    message: `The section with index ${sectionIndex} has been deleted successfully!`,
    sections: course.sections,
  });
};

const addVideoToSection = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex },
    user: { userId },
    body: { isPreview },
  } = req;

  const course = await checkCoursePermissions(courseId, userId);
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }

  if (!req.files) {
    throwCustomError('No file uploaded', 400);
  }

  const { courseVideo } = req.files; // courseVideo is the field name front-end needs to provide!
  if (courseVideo.mimetype !== 'video/mp4') {
    throwCustomError('Please upload a video in mp4 format', 400);
  }

  const maxSize = 1024 * 1024 * 100; // 100MB
  if (courseVideo.size > maxSize) {
    throwCustomError('Please upload an image smaller than 100MB', 400);
  }

  // const videoName = uuidv4() + '-' + courseVideo.name.replaceAll(' ', '-');
  const videoName = uuidv4() + '.mp4';
  const videoPath = path.join(__dirname, '..', 'videos', videoName);
  await courseVideo.mv(videoPath);

  // Extract metadata from the uploaded video
  const metadata = await ffprobe(videoPath, { path: ffprobeStatic.path });
  const { width, height, duration } = metadata.streams[0];

  // Check if resolution meets requirements (480p or higher)
  if (width < 854 || height < 480) {
    fs.unlinkSync(videoPath);
    throwCustomError(
      'Video resolution must be higher than or equal to 854x480p',
      400
    );
  }

  const formattedDuration = formatDuration(duration);

  const videoData = {
    title: courseVideo.name.split('.')[0], // This is to get the title without the extension!
    formattedDuration,
    isPreview,
    videoUrl: `videos/${videoName}`,
  };

  course.sections[sectionIndex].videos.push(videoData);
  await course.save();

  res.status(200).json({
    message: 'Video has been uploaded successfully!',
    sections: course.sections,
    videoData,
  });
};

const getVideo = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex, videoIndex },
    user: { userId, role },
  } = req;

  // get the course
  const course = await Course.findById(courseId);
  if (!course) {
    throwCustomError(`Could not find a course with ID: ${courseId}`, 404);
  }

  // check for section validity
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }

  // check for video validity
  if (
    videoIndex >= course.sections[sectionIndex].videos.length ||
    videoIndex < 0
  ) {
    throwCustomError('Invalid Video Index!', 400);
  }

  const { isPreview, videoUrl } =
    course.sections[sectionIndex].videos[videoIndex];
  // check for accessibility
  if (!isPreview) {
    // other instructors can't view another's videos
    if (role === 'Instructor' && !course.instructor.equals(userId)) {
      throwCustomError('Unauthorized access!', 403);
    }

    if (role === 'Student') {
      // check for student enrollment first
      const enrollment = course.enrollments.find((enrollment) =>
        enrollment.studentId.equals(userId)
      );
      if (!enrollment) {
        throwCustomError('You are not enrolled in this course', 403);
      }

      // check for limited period access
      if (course.courseAvailability === 'Limited') {
        // start expiration date from the enrollment date
        const expirationDate = new Date(enrollment.enrollmentDate);
        // translate limited periods to dates
        switch (course.limitedPeriod) {
          case 'A week':
            expirationDate.setDate(expirationDate.getDate() + 7);
            break;
          case '2 weeks':
            expirationDate.setDate(expirationDate.getDate() + 14);
            break;
          case 'Month':
            expirationDate.setMonth(expirationDate.getMonth() + 1);
            break;
          case '2 month':
            expirationDate.setMonth(expirationDate.getMonth() + 2);
            break;
          case '4 month':
            expirationDate.setMonth(expirationDate.getMonth() + 4);
            break;
          case '6 month':
            expirationDate.setMonth(expirationDate.getMonth() + 6);
            break;
          case '8 month':
            expirationDate.setMonth(expirationDate.getMonth() + 8);
            break;
          case '10 month':
            expirationDate.setMonth(expirationDate.getMonth() + 10);
            break;
          case 'Year':
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);
            break;
        }

        // compare current date with the expiration date
        const currentDate = new Date();
        if (currentDate > expirationDate) {
          throwCustomError('course access has expired!', 403);
        }
      }
    }
  }

  // we start our video streaming logic!
  const { range } = req.headers;
  if (!range) {
    throwCustomError('Range header is required!', 400);
  }

  const videoSize = fs.statSync(videoUrl).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, '')); // replace all the non-digit characters
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1); // start + CHUNK_SIZE could go past the video end so we use Math.min

  const contentLength = end - start + 1; // to let the browser know how many bytes we're sending back
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(206, headers); // 206 status is for partial content!

  // Create read stream for requested chunk and pipe it to response
  const videoStream = fs.createReadStream(videoUrl, { start, end });
  videoStream.pipe(res);
};

// use this to update video title and isPreview to set to true or false (for free access without enrolling in the course)
const updateVideoInfo = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex, videoIndex },
    user: { userId },
    body: { videoTitle, isPreview },
  } = req;
  const course = await checkCoursePermissions(courseId, userId);
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }
  if (
    videoIndex >= course.sections[sectionIndex].videos.length ||
    videoIndex < 0
  ) {
    throwCustomError('Invalid Video Index!', 400);
  }
  course.sections[sectionIndex].videos[videoIndex].title = videoTitle;
  course.sections[sectionIndex].videos[videoIndex].isPreview = isPreview;
  await course.save();
  res.status(200).json({
    message: `Video info at index ${videoIndex} of section at index ${sectionIndex} has been updated successfully!`,
    sections: course.sections,
  });
};

const deleteVideo = async (req, res, next) => {
  const {
    params: { courseId, sectionIndex, videoIndex },
    user: { userId },
  } = req;
  const course = await checkCoursePermissions(courseId, userId);
  if (sectionIndex >= course.sections.length || sectionIndex < 0) {
    throwCustomError('Invalid Section Index!', 400);
  }
  if (
    videoIndex >= course.sections[sectionIndex].videos.length ||
    videoIndex < 0
  ) {
    throwCustomError('Invalid Video Index!', 400);
  }
  // Extract the video url from the database
  const { videoUrl } = course.sections[sectionIndex].videos[videoIndex];
  // Construct the full path
  const videoPath = path.join(__dirname, '..', videoUrl);
  // Delete the file from server directory
  fs.unlinkSync(videoPath);
  // Remove the video object from array and save to db
  course.sections[sectionIndex].videos.splice(videoIndex, 1);
  await course.save();
  res.status(200).json({
    message: `Video at index ${videoIndex} in Section at index ${sectionIndex} has been deleted successfully!`,
    sections: course.sections,
  });
};

// old approach using stand-alone endpoints for file upload

// const uploadCourseImage = async (req, res, next) => {
//   if (!req.files) {
//     throwCustomError('No file uploaded', 400);
//   }

//   const { courseImage } = req.files;
//   if (!courseImage.mimetype.startsWith('image')) {
//     throwCustomError('Please upload an image', 400);
//   }

//   const maxSize = 1024 * 1024 * 5; // 5MB
//   if (courseImage.size > maxSize) {
//     throwCustomError('Please upload an image smaller than 5MB', 400);
//   }

//   const imageName = uuidv4() + '-' + courseImage.name;
//   await courseImage.mv(
//     path.join(__dirname, '..', 'public', 'images', imageName)
//   );

//   res.status(200).json({ imageUrl: `images/${imageName}` });
// };

// const uploadCourseVideo = async (req, res, next) => {
//   if (!req.files) {
//     throwCustomError('No file uploaded', 400);
//   }

//   const { courseVideo } = req.files;
//   if (!courseVideo.mimetype !==  'video/mp4') {
//     throwCustomError('Please upload a video in mp4 format', 400);
//   }

//   const maxSize = 1024 * 1024 * 100; // 100MB
//   if (courseVideo.size > maxSize) {
//     throwCustomError('Please upload an image smaller than 100MB', 400);
//   }

//   // before moving the video, use ffmpeg to extract duration and check for resolution

//   const videoName = uuidv4() + '-' + courseVideo.name;
//   await courseVideo.mv(
//     path.join(__dirname, '..', 'public', 'videos', videoName)
//   );

//   res.status(200).json({ videoUrl: `videos/${videoName}` });
// };

module.exports = {
  createCourse,
  addSectionToCourse,
  updateSectionTitle,
  deleteSectionFromCourse,
  addVideoToSection,
  getVideo,
  updateVideoInfo,
  deleteVideo,
  // uploadCourseImage,
  // uploadCourseVideo,
};
