const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const mustacheExpress = require('mustache-express');
const models = require('./models')
const app = express();
const userRouter = require('./routes/users');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(expressValidator());

app.set('trust proxy', 1) // trust first proxy
app.use(session({ //have not installed sessions yet - 7/2/17 7:09pm
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(userRouter);

app.listen(3000);
