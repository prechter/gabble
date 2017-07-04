const express = require('express')
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const path = require('path');
const mustacheExpress = require('mustache-express');
const models = require('../models')



router.get('/', function(req, res) {
  res.render('index')
});

router.get('/signup', function(req, res) {
  res.render('signup')
});

router.post('/signup-route', function(req, res) {
    const user = models.users.build({
      username: req.body.usernameEntry,
      password: req.body.passwordEntry,
      name: req.body.nameEntry
    })
  user.save();
  res.redirect('/')
})



module.exports = router;
