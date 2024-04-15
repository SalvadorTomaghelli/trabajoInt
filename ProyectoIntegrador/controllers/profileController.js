const profileController ={
    profile: function(req, res, next) {
        res.render('profile');
      },
      profileEdit: function(req, res, next) {
        res.render('profile-edit');
      }
}

module.exports = profileController