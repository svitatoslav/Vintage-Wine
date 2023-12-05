const express = require("express");
const router = express.Router();

const {getShares, addShares, getSharesById} = require("../controllers/shares");

// @route   GET /shares
// @desc    GET existing shares
// @access  Public
router.get("/", getShares)

// @route   POST /shares
// @desc    POST new article
// @access  Public
router.post("/", addShares)

// @route   GET /shares/:id
// @desc    GET existing article by id
// @access  Public
router.get("/:id", getSharesById)

module.exports = router;