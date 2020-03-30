const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById({ _id: id }).then(user => done(null, user));
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true,
			passReqToCallback: true
		},
		async (req, accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				// user exists, skip
				return done(null, existingUser);
			}
			// no user, create new one
			let user;
			try {
				user = await new User({
					googleId: profile.id,
					usertype: req.query.state
				}).save();
			} catch (error) {
				return done(error);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, null);
			}
		}
	)
);
