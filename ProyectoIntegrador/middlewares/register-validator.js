const { body } = require("express-validator")
const db = require('../db/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const bcryptjs = require('bcryptjs')
let regsiterValidations=[
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .custom(function(value){
            
        })
]