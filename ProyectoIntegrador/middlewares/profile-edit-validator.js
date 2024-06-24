const { body } = require("express-validator")
const db = require('../db/models'); //Requerimos la conexión a la base de datos y todos los modelos.
let profileEditValidator=[
    body("email")
        .notEmpty()
        .withMessage("Debes completar este campo")
        .isEmail()
        .withMessage('Debes escribir un formato de correo valido')
        .custom(function(value,{req}){

            if (value == req.session.user.email) {
                return value
            } else {

            return db.Usuarios.findOne({
                where:{email: value},
            })
            .then(function(usuarios){
                if(usuarios)//si no hay usuario
                {
                    throw new Error('Ya existe este email')
                }
            })
        }}),
    body('nombre')
        .notEmpty()
        .withMessage('Debes completar tu nombre de usuario'),
    body("contrasenia")
        .notEmpty()
        .withMessage('Debes completar tu contraseña')
        .isLength({ min: 4 })
        .withMessage('La contraseña debe tener al menos 4 caracteres')
]


module.exports=profileEditValidator;