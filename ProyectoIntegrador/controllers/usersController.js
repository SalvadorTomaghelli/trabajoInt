const usuarios = require("../db/index")
const db = require('../db/models');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const usersController = {
    login: function(req, res, next) {
      if (req.session.user != undefined){
        return res.redirect('/')
      } else {
      res.render('login');}

      },
    register: function(req, res, next) {
      if (req.session.user != undefined){
        return res.redirect('/')
      } else {
      res.render('register');}
      },
    profileEdit: function(req, res, next) {
      if (req.session.user == undefined){
        return res.redirect('/')
      } else {
      res.render('profile-edit');}
      },
    users: function(req, res, next) {
      res.render('users');
      },
    store: function(req,res,next){
      const errors = validationResult(req);
      if (!errors.isEmpty()){
            console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render("register",{
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
    },
    login2: function(req,res) {
      const errors = validationResult(req)
      if (!errors.isEmpty()){
        console.log("errors:", JSON.stringify(errors, null, 4))
        return res.render("login",{
          errors: errors.mapped(),
          oldData: req.body
        })
      } else {
        db.Usuarios.findOne({
          where: [{email: req.body.email}]
      })
      .then( function ( usuario ) {
        req.session.user = usuario;
        if(req.body.recordame != undefined){
          res.cookie('usuarioId', usuario.id, { maxAge: 1000 * 60 * 100})
      }
        return res.redirect('/users');            
            })
            .catch( function(e) {
              console.log(e)
          })
      }
    },
    logout:function(req,res){
      //Destruir la sesión
      req.session.destroy();

      //Destruir la cookie
       res.clearCookie('usuarioId');
      
      //redireccionar a home
      return res.redirect('/')
    },
    profile: function(req,res) {
      if (req.session.user == undefined){
        return res.redirect('/')
      } else {
      let id = req.session.user.id
      console.log(id)
      db.Usuarios.findByPk(id,{
        include: [
            {association: 'Productos'}
        ] 
      })
        .then(data =>{
          console.log("Usuario por id: ",JSON.stringify(data,null,4))
          return res.render('profile', { usuario: data})

        })
        .catch(e =>{
          console.log(e)
        })
      }}
    }
    

module.exports = usersController