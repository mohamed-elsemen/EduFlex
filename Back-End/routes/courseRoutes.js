const express = require('express');

const { authenticateUser, authorizeRoles } = require('../middleware/auth');
const courseController = require('../controllers/courseController');

const router = express.Router();

// // we combined this to be in the createCourse route!
// router.post(
//   '/upload-course-image',
//   [authenticateUser, authorizeRoles('Instructor')],
//   courseController.uploadCourseImage
// );

router
  .route('/')
  .post(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.createCourse
  );

router
  .route('/:courseId/sections')
  .post(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.addSectionToCourse
  );

router
  .route('/:courseId/sections/:sectionIndex')
  .patch(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.updateSectionTitle
  )
  .delete(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.deleteSectionFromCourse
  );

// // we combined this to be in the addVideoToSection route!
// // front-end sends a request to this route onChange of the file field
// router.post(
//   '/upload-course-video',
//   [authenticateUser, authorizeRoles('Instructor')],
//   courseController.uploadCourseVideo
// );

router
  .route('/:courseId/sections/:sectionIndex/videos')
  .post(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.addVideoToSection
  );

router
  .route('/:courseId/sections/:sectionIndex/videos/:videoIndex')
  .get(authenticateUser, courseController.getVideo)
  // use this to update title and isPreview
  .patch(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.updateVideoInfo
  )
  .delete(
    [authenticateUser, authorizeRoles('Instructor')],
    courseController.deleteVideo
  );

module.exports = router;
