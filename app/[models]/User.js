import mongoose, { Schema } from "mongoose";
import dbConnect from "../utils/mongo";

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;

// // Get the default connection
// const db = mongoose.connection;

// // Listen for MongoDB connection events
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

dbConnect();

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
