const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

var session = require('express-session');
app.set('trust proxy', 1)
app.use(session({
    secret: 'till_i_die',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 72000 }
  }))

var moment = require('moment');
app.locals.moment = moment;

var flash = require('express-flash');
app.use(flash());

require('./server/config/home');

require('./server/config/routes')(app);

app.listen(8000, ()=>{
  console.log('listening on port 8000');
})