const express = require("express");
const AuthController = require("../controllers/authcontroller");
const route = express.Router();

route.get("/", AuthController.adminProtected, AuthController.getUsers);
route.post("/signup", AuthController.signUp);
route.post("/login", AuthController.login);
route.get("/checkAuth", AuthController.checkAuth);

module.exports = route;
