const express = require("express"); // Node framework
const passport = require("passport"); // For authentication
const router = express.Router();  // Router method
const {
  facebook,
  facebookCallBack,
  amazon,
  amazonCallBack,
  github,
  githubCallBack,
  google,
  googleCallBack,
  instagram,
  instagramCallBack,
  spotify,
  spotifyCallBack,
  twitch,
  twitchCallBack,
  logout
} = require("../controllers/passport.controller.js"); // Controller of passport routes

// ------------- Routes -------------
// Facebook
router.get("/facebook", facebook);
router.get("/facebook/callback", passport.authenticate("facebook"), facebookCallBack);

// Amazon
router.get("/amazon", amazon);
router.get("/amazon/callback", passport.authenticate("amazon"), amazonCallBack);

// Github
router.get("/github", github);
router.get("/github/callback", passport.authenticate("github"), githubCallBack);

// Google
router.get("/google", google);
router.get("/google/callback", passport.authenticate("google"), googleCallBack);

// Instagram
router.get("/instagram", instagram);
router.get("/instagram/callback", passport.authenticate("instagram"), instagramCallBack);

// Spotify
router.get("/spotify", spotify);
router.get("/spotify/callback", passport.authenticate("spotify"), spotifyCallBack);

// Twitch
router.get("/twitch", twitch);
router.get("/twitch/callback", passport.authenticate("twitch"), twitchCallBack);

// Logout
router.get("/logout", logout);

module.exports = router;
