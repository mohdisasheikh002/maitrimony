const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
    },
    role: { type: String, enum: ["user", "admin"], default: "admin" },
  },
  {
    timestamps: true,
  }
);

adminSchema.plugin(plm);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
