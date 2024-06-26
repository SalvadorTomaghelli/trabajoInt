const productos = require('../db/productos')
const db = require('../db/models');
const op = db.Sequelize.Op;
const indexController ={
    index: function(req, res, next) {
        db.Productos.findAll({
            order: [
                ['created_at', 'DESC']
            ],
            include: [
                {association: "Usuarios"},
                {association: "Comentarios",
                    include: [{association: 'Usuarios'}]}   
            ]
        })
            .then( data => {
                return res.render('index', { autos: data })
            })
            .catch(error =>{
                console.log(error);
            })
        // res.render('index', {productos} );
        },
    searchResults: function(req, res, next) {
        let infoABuscar = req.query.search; //obtengo la info de la querystring.
        console.log(infoABuscar)
        let filtramos={
            where:{
                [op.or]:[
                    {nombre_producto:{[op.like]:'%'+ infoABuscar + '%'}},
                    {descripcion:{[op.like]:'%' + infoABuscar + "%"}}

                ],
                
            },
            order:[['created_at', 'DESC']],
            include: [
                {association: "Usuarios"},
                {association: "Comentarios",
                    include: [{association: 'Usuarios'}]}   
            ]
            
        }
        db.Productos.findAll(filtramos)
            .then(data => {
                console.log("hola hoala: ", JSON.stringify(data,null, 4))
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