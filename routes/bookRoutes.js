const express = require('express');
const router = express.Router();
const controller = require('../controller/bookController');
const constantParam = require('../static');

router.post('/createBookDetails', controller.createBooksController);
router.get('/getBookDetails', controller.getBookDetailsController);
router.get('/searchBookByTitle', controller.searchBookByTitleController);
router.get('/sortBookByAttribute', controller.sortByAttributeController);
router.post('/customerDetails', controller.createCustomerDetails);

module.exports = router;
