const express = require("express");
const router = express.Router();

//Import controllers
const {
    getExcursions
} = require("../controllers/excursions");


// @route   GET /excursions
// @desc    GET existing excursions
// @access  Public
router.get("/", getExcursions);

module.exports = router;
