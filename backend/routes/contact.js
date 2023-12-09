const express = require("express");
const router = express.Router();

//Import controllers
const {leaveContact} = require("../controllers/contact");

// @route   POST /orders
// @desc    Place Order
// @access  Private
router.post("/", leaveContact);

module.exports = router;
