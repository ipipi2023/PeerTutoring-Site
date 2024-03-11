//get coursesPage Controller
const Course = require('../models/courses');

module.exports = async (req, res) => {
    try {
        const courses = await Course.find({});
        console.log(courses);
        res.render('courses', {courses});
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).send('Error fetching courses');
    }
};
