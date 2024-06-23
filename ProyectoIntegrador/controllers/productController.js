const usuarios = require("../db/index")
const productos = require('../db/productos')
const db = require('../db/models');



const productController ={
    product: function(req, res, next) {
        res.render('product', {
            usuarios ,
            productos
        });
        },
    productAdd: function(req, res, next) {
        res.render('product-add');
        },
    products: function (req,res) {
        let id = req.params.id
        console.log("el id es: " + id)
        db.Productos.findByPk(id, {
            include: [
                {association: "Usuarios"},
                {association: "Comentarios",
                    include: [{association: 'Usuarios'}]}   
            ]
        })
        .then(data =>{
            console.log("producto por id: ", JSON.stringify(data,null, 4))
            return res.render('product',{product:data})
        })
        .catch(e =>{
            console.log(e)
          })
    }
    

}

module.exports = productController