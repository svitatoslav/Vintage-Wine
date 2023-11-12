const express = require("express");
const router = express.Router();

//Import controllers
const {
    getExcursions,
    reserveExcursion,
} = require("../controllers/excursions");


// @route   GET /excursions
// @desc    GET existing excursions
// @access  Public
router.get("/", getExcursions);

// @route   PUT /customers
// @desc    Register customer
// @access  Public
router.put("/:title", reserveExcursion);

module.exports = router;
