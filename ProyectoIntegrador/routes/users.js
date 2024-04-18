var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

router.get('/', usersController.users);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/profile', usersController.profile);
router.get('/profileEdit', usersController.profileEdit);

module.exports = router;
