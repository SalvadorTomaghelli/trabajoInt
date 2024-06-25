const { body } = require("express-validator")
const db= require("../db/models")
const productEditValidator=[
    body('image')
        .notEmpty()
        .withMessage("Debes selecionar un archivo"),
    body('producto')
        .notEmpty()
        .withMessage('Debes ingresa el nombre del producto'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes ingresar la descripcion del producto')
]

module.exports= productEditValidator;