var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

router.get('/', productController.product);
router.get('/productAdd', productController.productAdd);
router.get('/:id?', productController.products)

module.exports = router;