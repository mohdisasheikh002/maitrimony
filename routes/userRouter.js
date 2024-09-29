var express = require("express");
var router = express.Router();
const User = require("../models/userModel");
const passport = require("passport");

const { isUserLoggedIn } = require("../middleware/isLoggedIn");

router.get("/register", function (req, res, next) {
  const { name, mobileNumber } = req.query;
  res.render("userRegister", { user: req.user, name, mobileNumber });
});

router.post("/register", async function (req, res, next) {
  try {
    const {
      name,
      username,
      day,
      month,
      year,
      gender,
      height,
      maritalStatus,
      numberOfChildren,
      childrenLiving,
      religion,
      employedIn,
      state,
      city,
      address,
      mobileNumber,
      country,
      email,
      password,
    } = req.body;

    const newUser = new User({
      name,
      username,
      day,
      month,
      year,
      gender,
      height,
      maritalStatus,
      numberOfChildren,
      childrenLiving,
      religion,
      employedIn,
      state,
      city,
      address,
      mobileNumber,
      country,
      email,
    });

    await User.register(newUser, password);
    res.redirect("/user/login");
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/grab-attention", (req, res) => {
  const { name, mobileNumber } = req.body;

  res.redirect(`/user/register?name=${name}&mobileNumber=${mobileNumber}`);
});

router.get("/login", function (req, res, next) {
  res.render("userLogin", { user: req.user });
});

router.post(
  "/login",
  passport.authenticate("user-local", {
    successRedirect: "/user/profile",
    failureRedirect: "/user/login",
  })
);

router.get("/profile", isUserLoggedIn, function (req, res, next) {
  res.render("profile", { user: req.user });
});

router.get("/logout", isUserLoggedIn, function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/user/login");
  });
});

module.exports = router;
