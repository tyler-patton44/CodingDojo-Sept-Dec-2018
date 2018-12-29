var express = require("express");
var app = express();

console.log(__dirname);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andyy@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function() {
  console.log("localhost:8000");
})