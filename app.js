const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const mustacheExpress = require('mustache-express');
const models = require('./models')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(expressValidator());

// const author = models.author.build({
//   name: 'Tolkien'
// })
//
// author.save();

// const book = models.book.build({
//   name: 'The Hobbit',
//   authorId: 1
// })
//
// book.save();

app.get('/', function(req, res){
  res.render('index', {});
})

app.post('/authors', function(req, res){
  const author = models.author.build({
    name: req.body.name
  })
  author.save();
  res.redirect('/')
})

app.listen(3000);
