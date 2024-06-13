const usuarios = require("../db/index")
const db = require('../db/models');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
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
      const errors = validationResult(req);
      if (!errors){
            return res.render("users",{
            errors: errors.mapped(),
            oldData: req.body
            })
      }else{
        // Guardar un usuario en la db
        const usuarios = {
            nombre: req.body.user,
            email: req.body.email,
            contrasenia: bcrypt.hashSync(req.body.password, 10),
            fecha: req.body.fecha,
            dni: req.body.DNI,
            foto_perfil: req.body.profile,
        };
        //creamos el usuario
        db.Usuarios
            .create(usuarios)
            .then(function (user) {
                return res.redirect("/login");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    }
    }
}

module.exports = usersController