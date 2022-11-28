const { Schema } = require('mongoose');
const { Tournament } = require ('./Tournament');

// Schema to create course model
const courseSchema = new Schema({
        courseName: {
            type: String,
            required: true,
        },
        courseImage: {
            type: String,
        },
        courseDescription: {
            type: String,
            required: true,
        },
        par: {
            type: String,
            required: true
        },
        // tournaments: [Tournament]
    });

const Course = model ('Course', courseSchema);
module.exports = Course;
