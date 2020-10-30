// COMP229-F2020-MidtermTest, Nguyen Khang Nguyen, 301098234, 10/29/2020

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', bookModel);
