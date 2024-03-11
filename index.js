// Import dependencies
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload'); //handle fileupload
const expressSession = require('express-session');

const app = new express();

//connecting to database 
mongoose.connect('mongodb://localhost/peertutor');

//import controllers
const homePageController = require('./controllers/homePageController');
const getResumePageController = require('./controllers/getResumePage');
const getAppointmentPageController = require('./controllers/getAppointmentPage');
const getCoursesPageController = require('./controllers/getCoursesPage');

//middleware
app.use(express.static('public'));// get static files 
app.use(fileUpload())//fileupload- image in this case
app.set('view engine', 'ejs'); // ejs
app.use(bodyParser.json()); //parse incomming request bodies in JSON formate and make it available in req.body of the route handler
app.use(bodyParser.urlencoded({extended:true})); //parse incomming request bodies encoded in URL-encoded formate and made available in req.body of the route handler
app.use(expressSession({
    secret: 'Hello World',
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't create session until something stored
}));

//routing
app.get('/', homePageController);

app.get('/resume', getResumePageController);

app.get('/appointment', getAppointmentPageController);

app.get('/courses', getCoursesPageController);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});