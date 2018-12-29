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

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_first_db');

mongoose.Promise = global.Promise;

var User = new mongoose.Schema({
  name: String,
  age: Number
 })
 mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
 var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

const server = app.listen(1337, function() {
  console.log("listening on port 1337");
 });
// const io = require('socket.io')(server);

// io.on('connection', function (socket) {
//   socket.on('formInfo', function (data) {
//     console.log(data);

//     socket.emit('sendForm', {response: data})
//     var nummy = Math.floor(Math.random() * 1001) + 1;
//     socket.emit('randomNum', { randNum: nummy})
//   });

// });

app.get('/', function(req, res) {
  res.render("index");
})

app.post('/formInfo', function(req, res) {
  var user = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment:req.body.comment
  };
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {

    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
    }
    res.redirect('/results');
  })
})

app.get('/results', function(req, res) {
  res.render("index");
})