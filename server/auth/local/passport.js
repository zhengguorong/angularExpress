var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.findOne({
        email: email.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: '该账户尚未注册' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: '密码不正确' });
        }
        return done(null, user);
      });
    }
  ));
};