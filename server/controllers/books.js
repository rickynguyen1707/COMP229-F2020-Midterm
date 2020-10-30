// COMP229-F2020-MidtermTest, Nguyen Khang Nguyen, 301098234, 10/29/2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Books = require('../models/books');

module.exports.displayBooksList = (req,res,next) => {
    Books.find((err, booksList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            
            res.render('books', {title: 'Favorite Books List',BooksList: booksList});
        }
    }).sort({name:1, number:1, email:1});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('books/details', {title: 'Add Book'});
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Books({
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    
    })

    Books.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Books.findById(id, (err, bookToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('books/edit', {title: 'Edit Book', books: bookToUpdate})
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Books({
        "_id": id,
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });

    Books.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/books');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Books.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/books');
        }
    })
}