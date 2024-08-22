var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { user: req.user });
});

router.get("/about", function (req, res, next) {
  res.render("about", { user: req.user });
});

router.get("/memberships", function (req, res, next) {
  res.render("membership", { user: req.user });
});

module.exports = router;
