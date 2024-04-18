const productController ={
    product: function(req, res, next) {
        res.render('product');
        },
    productAdd: function(req, res, next) {
        res.render('product-add');
        }
    

}

module.exports = productController