const usuarios = require("../db/index")
const db = require('../db/models');
const { validationResult } = require("express-validator");
const usersController = {
    login: function(req, res, next) {
      res.render('login')
      },
    register: function(req, res, next) {
      res.render('register');
      },
    profile: function(req, res, next) {
      res.render('profile', {
        usuarios
      });
      },
    profileEdit: function(req, res, next) {
      res.render('profile-edit');
      },
    users: function(req, res, next) {
      res.render('users');
      },
    store: function(req,res,next){
      if (!validationResult.isEmpty()){
            return res.render("register",{
            errors: validationResult.mapped(),
            oldData: req.body
            })
      }else{
        // Guardar un usuario en la db
        const usuario = {
            nombre: req.body.user,
            email: req.body.email,
            contrasenia: bcrypt.hashSync(req.body.password, 10),
            fecha: req.body.fecha,
            DNI: req.body.DNI,
            foto_perfil: req.body.profile,
        };
        //creamos el usuario
        db.usuario
            .create(usuario)
            .then(function (usuario) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    }
    }
}
// let registerController={
    
// }


module.exports = usersController