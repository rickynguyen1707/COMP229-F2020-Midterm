// COMP229-F2020-MidtermTest, Nguyen Khang Nguyen, 301098234, 10/29/2020

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let indexController = require('../controllers/index');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;
