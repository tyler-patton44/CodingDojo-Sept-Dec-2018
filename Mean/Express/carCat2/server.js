var express = require("express");
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/form', function(request, response) {
    response.render('newCar');
})

app.get('/tester', function(request, response) {
    response.render('../static/test');
})

app.listen(8000, function() {
  console.log("localhost:8000");
})