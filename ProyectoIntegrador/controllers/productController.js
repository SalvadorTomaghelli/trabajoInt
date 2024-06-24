const usuarios = require("../db/index")
const productos = require('../db/productos')
const db = require('../db/models');
const { validationResult } = require("express-validator");


const productController ={
    product: function(req, res, next) {
        res.render('product', {
            usuarios ,
            productos
        });
        },
    productAdd: function(req, res, next) {
        if (req.session.user == undefined){
            return res.redirect('/')
          } else {
          res.render('product-add');}
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
    },
    storeProduct:function(req,res,next){
        const errors = validationResult(req);
      if (!errors.isEmpty()){
            console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render("product-add",{
            errors: errors.mapped(),
            oldData: req.body
            })
      }else{
        // Guardar un Producto en la db
        const producto = {
            nombre_foto: req.body.image,
            nombre_producto: req.body.producto,
            descripcion:req.body.descripcion,
            id_usuario: req.session.user.id
        };
        db.Productos
            .create(producto)
            .then(function (user) {
                return res.redirect("/users/profile");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
     }
    }
    

}

module.exports = productController