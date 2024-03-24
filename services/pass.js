const passport = require("passport");
const GgleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GgleStrategy(
        {
            clientID: keys.ggleCID,
            clientSecret: keys.ggleCK,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        //asyncronized funtion internally works as promise
        async (accessTkn, refreshTkn, profile, done) => {
            const existUser = await User.findOne({ googleID: profile.id });

            if (existUser)
                return done(null, existUser);

            let email = "none";
            if(profile._json.email)
                email = profile._json.email;

            const user = await new User({ googleID: profile.id, name: profile.displayName, emailId: email }).save();
            done(null, user);

        }
    )
);