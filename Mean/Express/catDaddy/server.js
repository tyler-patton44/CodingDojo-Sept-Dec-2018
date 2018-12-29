var express = require("express");
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/form', function(request, response) {
    response.render('newCar');
})
app.post('/formInfo', function(request, response) {
    console.log("POST DATA \n\n", request.body)
    console.log("------------------------------");
    console.log(request.body.name);
    console.log(request.body.breed);
    response.redirect('/');
})

app.get('/cat:id', function(request, response) {
    var info = {
        spot: ["Under the bed", "In the sun"],
        favorite: "Spaghetti",
        age: "5"
    };
    response.render('cat'+request.params.id, {about: info});
})

app.get('/cat2', function(request, response) {
    var info = {
        spot: ["Under the bed", "In the sun"],
        favorite: "Fish",
        age: "3"
    };
    response.render('cat2', {about: info});
})

app.get('/cat3', function(request, response) {
    var info = {
        spot: ["Under the bed", "In the sun"],
        favorite: "Steak",
        age: "2"
    };
    response.render('cat3', {about: info});
})

app.listen(8000, function() {
  console.log("localhost:8000");
})