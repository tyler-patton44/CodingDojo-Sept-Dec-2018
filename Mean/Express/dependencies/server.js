var express = require("express");
var path = require("path");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

console.log(__dirname);
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
 res.render("index");
})

app.post('/formInfo', function(req, res) {
    console.log("POST DATA", req.body);
    console.log(req.body.name+" "+req.body.breed);
    res.redirect('/');
   })

app.listen(8000, function() {
 console.log("listening on port 8000");
});