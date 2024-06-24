var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')
const productAddValidator = require('../middlewares/product-add-validator')
let comentarioValidator = require('../middlewares/comentario-validator')
router.get('/', productController.product);
router.get('/productAdd', productController.productAdd);
router.get('/:id', productController.products);

router.post('/productAdd', productAddValidator, productController.storeProduct );
router.post('/:id', comentarioValidator, productController.comentarioStore);

module.exports = router;