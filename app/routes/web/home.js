const express = require("express");
const router = express.Router();

// controller
const homeController = require('./../../http/controllers/homeControllers')

//home routes
router.get("/", homeController.index)

module.exports = router;
