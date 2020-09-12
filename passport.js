// Dependencies.
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// Authorization.
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "!@#$%^&*()_+"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false)
        if (user)
            return done(null, user);
        else
            return done(null, false);
    })
}))

//  Authentication Local Strat Using 'username' && 'Password'.
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        // If something went wrong...
        if (err)
            return done(err);
        // If No User Exists.
        if (!user)
            return done(null, false);
        // Checks if password is correct.
        user.comparePassword(password, done);
    })
}));