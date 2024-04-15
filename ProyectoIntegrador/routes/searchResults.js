var express = require('express');
var router = express.Router();
let searchResultsController = require('../controllers/searchResultsController')

router.get('/', searchResultsController.searchResults);

module.exports = router;