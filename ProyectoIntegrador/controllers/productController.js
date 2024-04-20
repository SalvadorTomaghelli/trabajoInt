const usuarios = require("../db/index")
const productController ={
    product: function(req, res, next) {
        res.render('product', {
            usuarios 
        });
        },
    productAdd: function(req, res, next) {
        res.render('product-add');
        }
    

}

module.exports = productController