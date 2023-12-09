const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    getExcursions,
    reserveExcursion,
    addExcursion,
} = require("../controllers/excursions");


// @route   GET /excursions
// @desc    GET existing excursions
// @access  Public
router.get("/", getExcursions);

// @access  Private
router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addExcursion
  );

// @route   PUT /customers
// @desc    Register customer
// @access  Public
router.put("/:title", reserveExcursion);

module.exports = router;
