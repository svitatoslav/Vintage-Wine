const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  placeOrder,
  updateOrder,
  cancelOrder,
  deleteOrder,
  getOrders,
  getOrder,
  getAllOrders,
  getSessionData,
} = require("../controllers/orders");

// @route   POST /orders
// @desc    Place Order
// @access  Private
router.post("/", placeOrder);

// @route   PUT /orders/:id
// @desc    Update order
// @access  Private
router.put(
  "/:orderNo",
  passport.authenticate("jwt-admin", { session: false }),
  updateOrder,
);

// @route   PUT /orders/cancel/:id
// @desc    Cancel order
// @access  Private
router.put(
  "/cancel/:id",
  passport.authenticate("jwt", { session: false }),
  cancelOrder,
);

// @route   DELETE /orders/:id
// @desc    Delete order
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteOrder,
);

// @route   GET /orders
// @desc    Get all orders
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getOrders);

// @route   GET /orders
// @desc    Get all orders
// @access  Private
router.get(
  "/all",
  passport.authenticate("jwt-admin", { session: false }),
  getAllOrders,
);

// @route   GET /orders/:orderNo
// @desc    Get one order by orderNo
// @access  Private
router.get(
  "/:orderNo",
  passport.authenticate("jwt", { session: false }),
  getOrder,
);

// @route ET /session/:sessionId
// @desc Get all checkout value by sessionId
// @access  Private

router.get(
  "/get-session-data/:sessionId",
  passport.authenticate("jwt", { session: false }),
  getSessionData,
);

module.exports = router;
