const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    leaveContact,
    getContactRequests,
    updateContactRequests,
    deleteContactRequests
} = require("../controllers/contact");

router.get(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    getContactRequests
);

router.put(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    updateContactRequests
);

router.delete(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    deleteContactRequests
);

// @access  Public
router.post("/", leaveContact);

module.exports = router;
