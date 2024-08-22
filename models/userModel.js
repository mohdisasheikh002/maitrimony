const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
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
    day: {
      type: Number,
      required: [true, "Day is required"],
      min: 1,
      max: 31,
    },
    month: {
      type: Number,
      required: [true, "Month is required"],
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female"],
    },
    height: {
      type: Number,
      required: [true, "Height is required"],
    },
    maritalStatus: {
      type: String,
      required: [true, "Marital Status is required"],
      enum: [
        "Never married",
        "Awaiting divorce",
        "Divorced",
        "Widowed",
        "Separated",
      ],
    },
    numberOfChildren: {
      type: Number,
    },
    childrenLiving: {
      type: String,
      enum: ["Living with me", "Not living with me"],
    },
    religion: {
      type: String,
      required: [true, "Religion is required"],
    },
    employedIn: {
      type: String,
      required: [true, "Employment status is required"],
      enum: ["Government", "Private", "Business", "Defence", "Not working"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Please fill a valid mobile number"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
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
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(plm);

const User = mongoose.model("User", userSchema);

module.exports = User;
