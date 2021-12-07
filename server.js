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
app.use('/', express.static('public'));

const tutorRoutes = require('./app/routes/tutorRoutes');
const accountRoutes = require('./app/routes/accountRoutes');

// simple route
app.get("/", (req, res) => res.render('index'))
app.get("/registerStudent", (req,res) => res.render('registerStudent')) // for testing purpose only since theres no db yet
app.get("/registerTutor", (req,res) => res.render('registerTutor')) // for testing purpose only since theres no db yet
app.get("/TutorPools", (req, res) => res.render('TutorPools'))

app.get("/logout", (req,res) => {
  req.session.destroy();
  res.redirect('/');
})

app.use(tutorRoutes);
app.use(accountRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


