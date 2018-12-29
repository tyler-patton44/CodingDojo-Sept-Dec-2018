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
mongoose.connect('mongodb://localhost/quoteDB');

mongoose.Promise = global.Promise;

const flash = require('express-flash');
app.use(flash());

var MessageSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name field is required'], minlength: [2, "Name must be longer than 1 character"], maxlength: [200, "Name must be less than 200"]},
  content: {type: String, required: [true, 'Quote field is required'], minLength: [1, "Quote must be above 1"], maxlength: [200, "Quote must be less than 200"]},
 }, {timestamps: true})

 mongoose.model('quotes', MessageSchema)
 var Quote = mongoose.model('quotes')


app.get('/', function(req, res) {
  res.render("index");
})

app.post('/formInfo', function(req, res) {
  var message = new Quote({name: req.body.name, content: req.body.content});
  message.save(function(err) {
    if(err) {
      for(var key in err.errors){
        if(err.errors[key].properties.path === 'name'){
          req.flash('name', err.errors[key].message);
        }
        if(err.errors[key].properties.path === 'content'){
          req.flash('content', err.errors[key].message);
        }
      }
      res.redirect('/');
    } 
    else {
      res.redirect('/results');
    }
  })
  

})

app.get('/results', function(req, res) {
  Quote.find({}, function(err, content){
    res.render("results", {mes: content});
  }).sort( { createdAt: -1 } )
})

app.listen(8000, function() {
  console.log("localhost:8000");
})