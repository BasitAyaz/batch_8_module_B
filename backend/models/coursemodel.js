const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
    },
    price: {
      type: {
        currency: String,
        amount: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("courses", CourseSchema);

module.exports = CourseModel;
