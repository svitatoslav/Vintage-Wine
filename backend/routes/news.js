const express = require("express");
const router = express.Router();

const {getNews, addNews, getNewstById} = require("../controllers/news");

// @route   GET /news
// @desc    GET existing news
// @access  Public
router.get("/", getNews)

// @route   POST /news
// @desc    POST new article
// @access  Public
router.post("/", addNews)

// @route   GET /news/:id
// @desc    GET existing article by id
// @access  Public
router.get("/:id", getNewstById)

module.exports = router;