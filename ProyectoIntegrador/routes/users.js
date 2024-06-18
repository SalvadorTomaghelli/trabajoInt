var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')
//Requerimos las validaciones de la carpeta Middlewares
const registerValidations=require('../middlewares/register-validator')
const loginValidations = require('../middlewares/login-validator')

router.get('/', usersController.users);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profile', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);
//Rutas Post, Hay que icluir las validaciones entre el Path y el controller
router.post('/register', registerValidations, usersController.store)
router.post('/login', loginValidations, usersController.login2);

module.exports = router;
