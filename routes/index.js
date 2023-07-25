const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');
// const habitController = require('../controller/habitController');

router.get("/", homeController.home);

router.post('/addHabit', homeController.addHabit);

router.get("/delete/:id", homeController.deleteHabit);

router.get("/details/:id", homeController.details);

router.post("/update/:habitId/:id", homeController.updateStatus);

module.exports = router;