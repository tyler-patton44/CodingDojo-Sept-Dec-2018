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

var moment = require('moment');
app.locals.moment = moment;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animalDB');

mongoose.Promise = global.Promise;

const flash = require('express-flash');
app.use(flash());

var AnimalSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name field is required'], minlength: [2, "Name must be longer than 1 character"], maxlength: [200, "Name must be less than 200"]},
  animal: {type: String, required: [true, 'Animal name is required'], minLength: [1, "Animal name must be above 1"], maxlength: [200, "Animal name must be less than 200"]},
 }, {timestamps: true})

 mongoose.model('animals', AnimalSchema)
 var Animals = mongoose.model('animals')


 app.get('/', function(req, res) {
  Animals.find({}, function(err, name){
    res.render("index", {thing: name});
  }).sort( { createdAt: -1 } )
})

app.post('/formInfo', function(req, res) {
  var animal = new Animals({name: req.body.name, animal: req.body.animal});
  animal.save(function(err) {
    if(err) {
      for(var key in err.errors){
        if(err.errors[key].properties.path === 'name'){
          req.flash('name', err.errors[key].message);
        }
        if(err.errors[key].properties.path === 'animal'){
          req.flash('animal', err.errors[key].message);
        }
      }
      res.redirect('/animal/new');
    } 
    else {
      res.redirect('/');
    }
  })
  

})

app.get('/animal/new', function(req, res) {
  res.render("createAnimal");
})

app.get('/animal/:id', function(req, res) {
  Animals.findOne({_id: req.params.id}, function(err, name){
    res.render("profile", {thing: name});
  })
})
app.get('/delete/:id', function(req, res) {
  Animals.remove({_id: req.params.id}, function(){
    res.redirect('/');
  })
})
app.get('/edit/:id', function(req, res) {
  Animals.findOne({_id: req.params.id}, function(err, name){
    res.render("editAnimal", {thing: name});
  })
})

app.post('/updateAnimal/:id', function(req, res) {
  Animals.findOne({_id: req.params.id}, function(err, user){
    user.name = req.body.name;
    user.animal = req.body.animal;
    user.save(function(err){
      if(err) {
      for(var key in err.errors){
        if(err.errors[key].properties.path === 'name'){
          req.flash('name', err.errors[key].message);
        }
        if(err.errors[key].properties.path === 'animal'){
          req.flash('animal', err.errors[key].message);
        }
      }
      res.redirect('/edit/'+req.params.id);
    } 
    else {
      res.redirect('/');
    }
    })

  })
})

app.listen(8000, function() {
  console.log("localhost:8000");
})