// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let booksController = require('../controllers/books');

/* GET books List page. READ */
router.get('/', booksController.displayBooksList);

//  GET the Book Details page in order to add a new Book
router.get('/add', booksController.displayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', booksController.processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', booksController.displayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', booksController.processEditPage);

// GET - process the delete by user id
router.get('/delete/:id', booksController.performDelete);


module.exports = router;
