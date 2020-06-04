const passport = require("passport"); // For authentication

const passportCtrl = {};  // Our object that contains all methods

// Facebook
passportCtrl.facebook = passport.authenticate("facebook");
passportCtrl.facebookCallBack = (req, res) => {
  res.redirect("/profile");
};

// Amazon
passportCtrl.amazon = passport.authenticate("amazon", {
  scope: ["profile"]
});
passportCtrl.amazonCallBack = (req, res) => {
  res.redirect("/profile");
};

// Github
passportCtrl.github = passport.authenticate("github");
passportCtrl.githubCallBack = (req, res) => {
  res.redirect("/profile");
};

// Google
passportCtrl.google = passport.authenticate("google", {
  scope: ["profile", "email"]
});
passportCtrl.googleCallBack = (req, res) => {
  res.redirect("/profile");
};

// Instagram
passportCtrl.instagram = passport.authenticate("instagram");
passportCtrl.instagramCallBack = (req, res) => {
  res.redirect("/profile");
};

// Spotify
passportCtrl.spotify = passport.authenticate("spotify");
passportCtrl.spotifyCallBack = (req, res) => {
  res.redirect("/profile");
};

// Twitch
passportCtrl.twitch = passport.authenticate("twitch.js");
passportCtrl.twitchCallBack = (req, res) => {
  res.redirect("/profile");
};

// Logout
passportCtrl.logout = async (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = passportCtrl;