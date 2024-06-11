const { body } = require("express-validator")
const db = require('../db/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const bcryptjs = require('bcryptjs')
let registerValidations=[
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .isEmail()
        .withMessage('Debes escribir un formato de correo valido')
        .custom(function(value,{req}){
            return db.usuarios.findOne({
                where:{email: req.body.email},
            })
            .then(function(usuarios){
                if(usuarios)//si no hay usuario
                {
                    throw new Error('Ya existe este email')
                }
            })
        }),
    body('user')
        .notEmpty()
        .withMessage('Debes completar tu nombre de usuario'),
    body("password")
        .notEmpty()
        .withMessage('Debes completar tu contraseña')
        .isLength({ min: 4 })
        .withMessage('La contraseña debe tener al menos 4 caracteres')
        //terminar el hashing
        

]




module.exports = registerValidations;