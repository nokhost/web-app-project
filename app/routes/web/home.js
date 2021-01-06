const express = require("express");
const router = express.Router();

// controller
const homeController = require('app/http/controllers/homeControllers')

//home routes
router.get("/", homeController.index)

module.exports = router;
