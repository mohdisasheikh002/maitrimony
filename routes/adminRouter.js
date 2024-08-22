var express = require("express");
var router = express.Router();
const Admin = require("../models/adminModel");
const passport = require("passport");

const { isAdminLoggedIn } = require("../middleware/isLoggedIn");

router.get("/register", function (req, res, next) {
  res.render("adminRegister", { admin: req.admin });
});

router.post("/register", async function (req, res, next) {
  try {
    const { name, username, email, password } = req.body;
    const newAdmin = new Admin({ name, username, email });
    await Admin.register(newAdmin, password);
    res.redirect("/admin/login");
  } catch (error) {
    res.send(error);
  }
});

router.get("/login", function (req, res, next) {
  res.render("adminLogin", { admin: req.admin });
});

router.post(
  "/login",
  passport.authenticate("admin-local", {
    successRedirect: "/admin/dashboard",
    failureRedirect: "/admin/login",
  })
);

router.get("/dashboard", isAdminLoggedIn, function (req, res, next) {
  res.render("dashboard", { admin: req.admin });
});

router.get("/logout", isAdminLoggedIn, function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/admin/login");
  });
});

module.exports = router;
