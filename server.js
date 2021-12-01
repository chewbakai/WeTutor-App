const express = require("express"),
    ejs = require('ejs');
    app = express(),
    path = require('path'),
    fileUpload = require('express-fileupload'),
    session = require("express-session"),
    http = require("http"),
    server = http.createServer(app),
    bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))  

app.set('view engine','ejs')
app.set('views', path.join(__dirname, './app/views'));
app.use(express.static(path.join(__dirname + 'public')));
// app.use('/', express.static('public'));

const tutorialRoutes = require("./app/routes/tutorialRoutes.js");

// simple route
app.get("/", (req, res) => res.render('index'))
app.get("/class", (req,res) => res.render('class'))
//app.use(tutorialRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


