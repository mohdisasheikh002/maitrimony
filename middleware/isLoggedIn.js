module.exports.isUserLoggedIn = function (req, res, next) {
  if (req.isAuthenticated() && req.user.role === "user") {
    return next();
  }
  res.redirect("/user/login");
};

module.exports.isAdminLoggedIn = function (req, res, next) {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.redirect("/admin/login");
};
