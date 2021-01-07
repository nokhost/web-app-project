const express = require("express");
const router = express.Router();

// controller
const homeController = require('../../http/controllers/homeControllers')
const loginController = require("../../http/controllers/auth/loginController");
const registerController = require("../../http/controllers/auth/registerController");

//home routes
router.get("/", homeController.index)
router.get("/login", loginController.showLoginForm)
router.get("/register", registerController.showRegsitrationForm);
router.post("/register", registerController.registerProccess)

module.exports = router;
