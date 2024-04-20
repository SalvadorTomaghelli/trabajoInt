const usuarios = require("../db/index")
const usersController = {
    login: function(req, res, next) {
      res.render('login')
      },
    register: function(req, res, next) {
      res.render('register');
      },
    profile: function(req, res, next) {
      res.render('profile', {
        usuarios
      });
      },
    profileEdit: function(req, res, next) {
      res.render('profile-edit');
      },
    users: function(req, res, next) {
      res.render('users');
      },
}




module.exports = usersController