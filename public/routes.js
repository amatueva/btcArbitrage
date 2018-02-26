const express = require('express');
const router = express.Router();
const ejs = require('ejs');


router.get('/', function(req, res) {
  res.render('main'); 
});
module.exports = router;