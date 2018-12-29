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

const flash = require('express-flash');
app.use(flash());

var UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name field is required'], minlength: [2, "Name must be longer than 1 character"]},
  age: {type: Number, min: [1, "Age must be above 1"], max: [200, "Age must be less than 200"], required: [true, 'Age field is required']},
 })
 mongoose.model('User', UserSchema)
 var User = mongoose.model('User')


app.get('/', function(req, res) {
  // req.session.destroy();
  res.render("index");
})

app.post('/formInfo', function(req, res) {
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if(err) {
      console.log('something went wrong', err);
      for(var key in err.errors){
        console.log(err.errors[key].properties.path);
        if(err.errors[key].properties.path === 'name'){
          req.flash('name', err.errors[key].message);
        }
        if(err.errors[key].properties.path === 'age'){
          req.flash('age', err.errors[key].message);
        }
      }
      res.redirect('/');
    } 
    else {
      console.log('successfully added a user!');
      res.redirect('/results');
    }
  })
  

})

app.get('/results', function(req, res) {
  User.find({name: "Jane"}, function(err, user){
    console.log(user[0].name);
    res.render("results", {dude: user[0]});
  })
})

app.listen(8000, function() {
  console.log("localhost:8000");
})