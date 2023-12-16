const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const {
    getShares,
    addShares,
    getSharesById,
    uploadSharesImg
} = require("../controllers/shares");

// @route   GET /shares
// @desc    GET existing shares
// @access  Public
router.get("/", getShares)

// @route   POST /shares
// @desc    POST new article
// @access  Public
router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addShares
)

// @route   POST /shares
// @desc    POST new article
// @access  Private
router.put(
    "/images/:id",
    passport.authenticate("jwt-admin", { session: false }),
    upload.single('imageURL'),
    uploadSharesImg
)

// @route   GET /shares/:id
// @route   GET /shares/:id
// @desc    GET existing article by id
// @access  Public
router.get("/:id", getSharesById)

module.exports = router;