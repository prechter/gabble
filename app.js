const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const mustacheExpress = require('mustache-express');
const models = require('./models')
const app = express();
const userRouter = require('./routes/users');
const parseurl = require('parseurl'); //do i need this?

app.engine('mustache', mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');
app.set('trust proxy', 1) // trust first proxy

app.use(session({
  secret: 'rebusakasafram',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static('public'));
app.use(expressValidator());
app.use(userRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(3000);
