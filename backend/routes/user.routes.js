const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  try {
    res.send(req.user.information);
  } catch{
    res.send();
  };
});

module.exports = router;
