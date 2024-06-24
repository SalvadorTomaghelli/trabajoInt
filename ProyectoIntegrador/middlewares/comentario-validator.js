const { body } = require("express-validator")
const db= require("../db/models")
const bcryptjs = require('bcryptjs');

const comentarioValidator = [
    body("comentario")
    .notEmpty()
    .withMessage("Debes ingresar un comentario")
    .bail()
    .isLength({ min: 4 })
    .withMessage('El comentario debe tener al menos 4 caracteres')
]

module.exports = comentarioValidator;