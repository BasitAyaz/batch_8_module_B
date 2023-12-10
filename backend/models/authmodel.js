const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is Required"],
  },
  password: {
    type: String,
    required: [true, "User Name is Required"],
  },
  contact: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["admin", "user"],
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
