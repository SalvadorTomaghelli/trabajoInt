const usuarios = require("../db/index")
const productos = require('../db/productos')
const productController ={
    product: function(req, res, next) {
        res.render('product', {
            usuarios ,
            productos
        });
        },
    productAdd: function(req, res, next) {
        res.render('product-add');
        }
    

}

module.exports = productController