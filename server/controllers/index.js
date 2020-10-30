// COMP229-F2020-MidtermTest, Nguyen Khang Nguyen, 301098234, 10/29/2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

module.exports.displayHomePage = (req,res,next) => {
    res.render('index', {title: 'Home'});
}