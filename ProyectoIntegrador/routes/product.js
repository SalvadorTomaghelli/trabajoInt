var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')
const productAddValidator = require('../middlewares/product-add-validator')
const productEditValidator = require('../middlewares/product-edit-validator')
let comentarioValidator = require('../middlewares/comentario-validator')
router.get('/', productController.product);
router.get('/productAdd', productController.productAdd);
router.get('/:id', productController.products);
router.get('/productEdit/:id',productController.productEdit)

router.post('/productAdd', productAddValidator, productController.storeProduct );
router.post('/:id', comentarioValidator, productController.comentarioStore);
router.post('/productEdit/:id', productEditValidator, productController.update)
module.exports = router;