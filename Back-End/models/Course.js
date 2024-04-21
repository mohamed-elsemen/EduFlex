const { Schema, model } = require('mongoose');

const Review = require('./Review');

// Define a schema for Video
const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

// Define a schema for Section
const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
});

// Define a schema for Course
const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [{ type: String, required: true }],
    subject: { type: String, required: true },
    thumbnail: { type: String, required: true },
    language: {
      type: String,
      required: true,
      enum: {
        values: ['Arabic', 'English'],
        message: '{VALUE} is not supported',
      },
    },
    education: {
      type: String,
      enum: {
        values: ['General', 'Special', 'Graduated'],
        message: '{VALUE} is not supported',
      },
    },
    stage: {
      type: String,
      enum: {
        values: ['Primary stage', 'Middle school', 'High school', 'University'],
        message: '{VALUE} is not supported',
      },
    },
    level: {
      type: String,
      enum: {
        values: ['Level one', 'Level two', 'Level three'],
        message: '{VALUE} is not supported',
      },
    },
    term: {
      type: String,
      enum: {
        values: ['First term', 'Second term'],
        message: '{VALUE} is not supported',
      },
    },
    price: {
      type: Number,
      required: true,
    },
    courseAvailability: {
      type: String,
      required: true,
      enum: {
        values: ['Limited', 'Unlimited'],
        message: '{VALUE} is not supported',
      },
    },
    limitedPeriod: {
      type: String,
      enum: {
        values: [
          'A week',
          '2 weeks',
          'Month',
          '2 month',
          '4 month',
          '6 month',
          '8 month',
          '10 month',
          'Year',
        ],
        message: '{VALUE} is not supported',
      },
    },
    avgRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    sections: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Section',
      },
    ],
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    enrollments: [
      {
        studentId: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        enrollmentDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
    // these are essential for the virtual to work!
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

courseSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'course',
  justOne: false, // because we want a list!
});

// we reach out to Review model and delete reviews associated with the course
// before it gets deleted so a pre-deleteOne hook
courseSchema.pre('deleteOne', { document: true }, async function () {
  await Review.deleteMany({ course: this._id });
});

// Create models based on the schemas
const Video = model('Video', videoSchema);
const Section = model('Section', sectionSchema);
const Course = model('Course', courseSchema);

module.exports = { Video, Section, Course };
