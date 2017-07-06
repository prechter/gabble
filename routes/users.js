const express = require('express')
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const mustacheExpress = require('mustache-express');
const models = require('../models');
const parseurl = require('parseurl');//do i need this??

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


//the sign-up route
router.get('/signup', function(req, res) {
  res.render('signup')
});

router.post('/signup-route', function(req, res) {
  const user = models.users.build({
    username: req.body.usernameEntry,
    password: req.body.passwordEntry,
    name: req.body.nameEntry
  });
  user.save();
  res.redirect('/')
});



//the login route
router.get('/login', function(req, res) {
  res.render('login')
});

router.post('/login-route', function(req, res) {
  let username = req.body.usernameLogin;
  let password = req.body.passwordLogin;
  models.users.findOne({
    where: {
      username: username,
      password: password
    }
  }).then(function(user) {
    if (user == null) {
      res.redirect('/login')
    }
    req.session.user = user
    res.redirect('/')
  })
});



//the homepage route
router.get('/', function(req, res) {
  if(!req.session.user) {
  //   return res.status(401).send("You're not logged in yet :/");
  // }
  res.render('index', {
    userSession: req.session
  })
});



//the post route
router.get('/post', function(req, res) {
  res.render('post')
});

router.post('/post-route', function(req, res){

});



//the logout route
router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
