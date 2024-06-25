const { body } = require("express-validator")
const db= require("../db/models")
const productAddValidator=[
    body('nombre_foto')
        .notEmpty()
        .withMessage("Debes selecionar un archivo"),
    body('nombre_producto')
        .notEmpty()
        .withMessage('Debes ingresa el nombre del producto'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debes ingresar la descripcion del producto')
]

module.exports= productAddValidator;