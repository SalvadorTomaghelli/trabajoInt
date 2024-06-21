const productos = require('../db/productos')
const indexController ={
    index: function(req, res, next) {
        res.render('index', {productos} );
        },
    searchResults: function(req, res, next) {
        res.render('search-results');
        }
}

module.exports = indexController