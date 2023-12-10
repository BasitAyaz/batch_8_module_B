const { transporter } = require("../config/nodemailer");
const { SendResponse } = require("../helpers/helpers");
const UserModel = require("../models/authmodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthController = {
  signUp: async (req, res) => {
    try {
      let { userName, password, contact, userType } = req.body;
      let obj = { userName, password, contact, userType };
      let errArr = [];

      if (!obj.userName) {
        errArr.push("User Name is Required");
      }
      if (!obj.password) {
        errArr.push("Password is Required");
      }

      if (errArr.length > 0) {
        res.status(400).send(SendResponse(false, "Validation Error", errArr));
        return;
      }

      let userExist = await UserModel.findOne({ userName: obj.userName });

      if (userExist) {
        res
          .status(400)
          .send(SendResponse(false, "User Already Exist with this User Name"));
        return;
      }

      obj.password = await bcrypt.hash(obj.password, 10);

      let User = new UserModel(obj);
      let result = await User.save();

      if (result) {
        res
          .status(200)
          .send(SendResponse(true, "User Created Successfully", result));
      }
    } catch (error) {
      res.status(500).send(SendResponse(false, "Internal Server Error", error));
    }
  },
  login: async (req, res) => {
    try {
      let { userName, password } = req.body;
      let obj = { userName, password };
      let existingUser = await UserModel.findOne({ userName: obj.userName });

      if (existingUser) {
        let corerctPassword = await bcrypt.compare(
          obj.password,
          existingUser.password
        );

        if (corerctPassword) {
          let token = jwt.sign({ ...existingUser }, process.env.SECRET_KEY);

          var mailOptions = {
            from: "wecam76300@mcenb.com",
            to: "basitahmed1997@gmail.com",
            subject: "Login Alert",
            text: "That was easy!",
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          res.send(
            SendResponse(true, "Login Successfully", {
              token: token,
              user: existingUser,
            })
          );
        } else {
          res.send(SendResponse(false, "Password Not Match"));
        }
      } else {
        res.send(SendResponse(false, "User Not Found with this User Name"));
      }
    } catch (error) {}
  },
  checkAuth: async (req, res) => {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401).send(SendResponse(false, "Un Authorized"));
      } else {
        res.status(200).send(SendResponse(true, "", decode._doc));
      }
    });
  },
  getUsers: async (req, res) => {
    try {
      let result = await UserModel.find();
      if (!result) {
        res.status(404).send(SendResponse(false, "Data Not Found"));
      } else {
        res.status(200).send(SendResponse(true, "", result));
      }
    } catch (error) {
      res.status(400).send(SendResponse(false, "Internal Server Error", error));
    }
  },
  protected: (req, res, next) => {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401).send(SendResponse(false, "Un Authorized", err));
      } else {
        next();
      }
    });
  },
  adminProtected: (req, res, next) => {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401).send(SendResponse(false, "Un Authorized", err));
      } else {
        if (decode._doc.userType == "admin") {
          next();
        } else {
          res
            .status(401)
            .send(
              SendResponse(false, "You Have no rights for this action", err)
            );
        }
      }
    });
  },
};

module.exports = AuthController;
