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
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
