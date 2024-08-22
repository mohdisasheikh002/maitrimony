const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected successfully");
} catch (error) {
  console.log("Database disconnected");
}
