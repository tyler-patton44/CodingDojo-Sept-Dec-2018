const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: true }));;
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
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

const flash = require('express-flash');
app.use(flash());

require('./server/config/messages');

require('./server/config/routes')(app);

app.listen(8000, ()=>{
  console.log('listening on port 8000');
})