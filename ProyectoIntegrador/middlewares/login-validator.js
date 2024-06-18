const { body } = require("express-validator")
const db= require("../db/models")
const bcryptjs = require('bcryptjs');

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            return db.Usarios.findOne({
                where: {email:value}
            })
            .then(function(loguearUsuario){
                if(!loguearUsuario){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }
    ),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .custom(function(value, {req}){
            return db.Usuarios.findOne({
                where: {email:req.body.email}
            })
            .then(function(Usuarios){
                if(Usuarios){
                    const password = Usuarios.password;
                    const passwordOk= bcryptjs.compareSync(value,password);
                    if(!passwordOk){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
        

]

module.exports = loginValidation;