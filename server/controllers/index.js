let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

module.exports.displayHomePage = (req,res,next) => {
    res.render('index', {title: 'Home'});
}