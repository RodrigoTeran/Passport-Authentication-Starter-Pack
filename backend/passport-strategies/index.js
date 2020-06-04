// Passport Modules
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy;
const GithubStrategy = require("passport-github").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;
const TwitchStrategy = require("passport-twitch.js").Strategy;

// User model
const { User } = require("../models/index");

// Important IDs
const keys = require("../config/index.js");

// Strategies Methods
passport.serializeUser((user, cb) => {
	cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
	User.findById(id).then((user) => {
		cb(null, user);
	});
});

// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: keys.FACEBOOK.clientID,
	clientSecret: keys.FACEBOOK.clientSecret,
	callbackURL: "/auth/facebook/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Amazon Strategy
passport.use(new AmazonStrategy({
	clientID: keys.AMAZON.clientID,
	clientSecret: keys.AMAZON.clientSecret,
	callbackURL: "/auth/amazon/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Github Strategy
passport.use(new GithubStrategy({
	clientID: keys.GITHUB.clientID,
	clientSecret: keys.GITHUB.clientSecret,
	callbackURL: "/auth/github/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Google Strategy
passport.use(new GoogleStrategy({
	clientID: keys.GOOGLE.clientID,
	clientSecret: keys.GOOGLE.clientSecret,
	callbackURL: "/auth/google/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Instagram Strategy
passport.use(new InstagramStrategy({
	clientID: keys.INSTAGRAM.clientID,
	clientSecret: keys.INSTAGRAM.clientSecret,
	callbackURL: "/auth/instagram/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Spotify Strategy
passport.use(new SpotifyStrategy({
	clientID: keys.SPOTIFY.clientID,
	clientSecret: keys.SPOTIFY.clientSecret,
	callbackURL: "/auth/spotify/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));

// Twitch Strategy
passport.use(new TwitchStrategy({
	clientID: keys.TWITCH.clientID,
	clientSecret: keys.TWITCH.clientSecret,
	callbackURL: "/auth/twitch/callback"
},
	(accessToken, refreshToken, profile, cb) => {
		// Check if user already exists in our DB
		User.findOne({
			providerId: profile.id
		}).then((currentUser) => {
			if (currentUser) {
				cb(null, currentUser);
			} else {
				new User({
					username: profile.displayName,
					providerId: profile.id,
					information: profile
				}).save().then((newUser) => {
					cb(null, newUser);
				});
			};
		});
	}));
