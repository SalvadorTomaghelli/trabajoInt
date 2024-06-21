const productos = require('../db/productos')
const db = require('../db/models');
const op = db.Sequelize.Op;
const indexController ={
    index: function(req, res, next) {
        res.render('index', {
            productos
        } );
        },
    searchResults: function(req, res, next) {
        let infoABuscar = req.query.search; //obtengo la info de la querystring.
        console.log(infoABuscar)

        db.Productos.findAll({
            //SELECT * FROM movies
            //WHERE title LIKE "%potter%"
            where: [
                { nombre_producto: { [op.like]: '%' + infoABuscar + '%' }, 
            order:[
              ['created_at','DESC']
            ]
        }
        
            ]
        })
            .then(data => {
                console.log(data)
                return res.render('search-results', { autos: data });
                
            })
            .catch(error => {
                console.log(error);
            })
       // res.render('search-results');
        }
}

module.exports = indexController