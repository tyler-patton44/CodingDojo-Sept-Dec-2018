var express = require("express");
var path = require("path");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

console.log(__dirname);
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

const axios = require('axios');

app.get('/', function(req, res) {
  if(req.session.num == null){
    req.session.num = Math.floor(Math.random() * 101) + 1;
    console.log(req.session.num);
  }
  var result = req.session.result;
  res.render("index", {info: result});
})

app.post('/guess', function(req, res) {
    if(req.body.number == req.session.num){
      req.session.result = "Correct";
    }
    if(req.body.number > req.session.num){
      req.session.result = "TO HIGH";
    }
    if(req.body.number < req.session.num){
      req.session.result = "TO LOW";
    }
  res.redirect("/");
})

app.get('/reset', function(req, res) {
  req.session.destroy();
  res.redirect("/");
})

app.get('/people', function(req, res) {
  // use the axios .get() method - provide a url and chain the .then() and .catch() methods
  axios.get('http://swapi.co/api/people/')
  .then(data => {
      // log the data before moving on! 
      console.log(data);
      // rather than rendering, just send back the json data!
      res.json(data);
  })
  .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
  })
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});