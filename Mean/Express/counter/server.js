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

app.get('/', function(req, res) {
  if(req.session.counter == null){
    req.session.counter = 0;
    var counter = req.session.counter;
  }
  else{
    req.session.counter += 1;
    var counter = req.session.counter;
  }

  res.render("index", {count: counter});
})

app.get('/double', function(req, res) {
    req.session.counter += 1;
    res.redirect('/');              
})

app.get('/reset', function(req, res) {
  req.session.destroy();
    res.redirect('/');              
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});