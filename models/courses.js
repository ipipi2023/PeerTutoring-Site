const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
