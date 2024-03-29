const passport = require("passport");
const notRequiredLogin = require("../middlewares/notRequiredLogin");

module.exports = (app) => {
    app.get(
        '/auth/google', notRequiredLogin,
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );


    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/'
        }),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get(
        '/api/current_user',
        (req, res) => {
            res.send(req.user);
        }
    );

    app.get(
        '/api/logout',
        (req, res) => {
            req.logout();
            res.redirect('/');
        }
    );
};