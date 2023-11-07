const express = require("express");
const router = express.Router();

const {getNews, addNews} = require("../controllers/news");

// @route   GET /news
// @desc    GET existing news
// @access  Public
router.get("/", getNews)

// @route   POST /news
// @desc    POST new article
// @access  Public
router.post("/", addNews)

module.exports = router;