var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')
const productAddValidator=require('../middlewares/product-add-validator')
router.get('/', productController.product);
router.get('/productAdd', productController.productAdd);
router.get('/:id?', productController.products);

router.post('/profile', productAddValidator, productController.storeProduct );
module.exports = router;