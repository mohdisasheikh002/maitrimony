const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

passport.use("user-local", new LocalStrategy(User.authenticate()));
passport.use("admin-local", new LocalStrategy(Admin.authenticate()));

passport.serializeUser((entity, done) => {
  done(null, { id: entity.id, type: entity.role });
});

passport.deserializeUser(async (obj, done) => {
  try {
    if (obj.type === "user") {
      const user = await User.findById(obj.id).exec();
      done(null, user);
    } else {
      const admin = await Admin.findById(obj.id).exec();
      done(null, admin);
    }
  } catch (err) {
    done(err);
  }
});
