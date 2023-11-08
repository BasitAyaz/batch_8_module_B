const express = require("express");
const AuthController = require("../controllers/authcontroller");
const route = express.Router();

route.post("/signup", AuthController.signUp);
route.post("/login", AuthController.login);

module.exports = route;
