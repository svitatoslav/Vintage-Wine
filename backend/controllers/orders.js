const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const sendMail = require("../commonHelpers/mailSender");
const validateOrderForm = require("../validation/validationHelper");
const queryCreator = require("../commonHelpers/queryCreator");
const productAvailibilityChecker = require("../commonHelpers/productAvailibilityChecker");
const subtractProductsFromCart = require("../commonHelpers/subtractProductsFromCart");
const _ = require("lodash");
const stripe = require("stripe")(
  "sk_test_51OEab4ABi53fWKsMfpy1ZEIoTuV2gdApovhKyXp5Q8BfSLvx7cBAiWzaQLe2dLPW5W5BytNaKXIaH7yYFVUQN2hZ00kGrwOA7l",
);

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1000000, 9999999);

exports.placeOrder = async (req, res, next) => {
  try {
    const order = _.cloneDeep(req.body);
    order.orderNo = String(rand());
    let cartProducts = [];

    if (req.body.deliveryAddress) {
      order.deliveryAddress = req.body.deliveryAddress;
    }

    if (req.body.shipping) {
      order.shipping = req.body.shipping;
    }

    if (req.body.paymentInfo) {
      order.paymentInfo = req.body.paymentInfo;
    }

    if (req.body.customerId) {
      order.customerId = req.body.customerId;

      cartProducts = await subtractProductsFromCart(order.customerId);
    }

    if (!req.body.products && cartProducts.length < 1) {
      res
        .status(400)
        .json({ message: "The list of products is required, but absent!" });
    }

    if (cartProducts.length > 0) {
      order.products = _.cloneDeep(cartProducts);
    } else {
      order.products = req.body.products;
    }

    order.totalSum = order.products.reduce(
      (sum, cartItem) =>
        sum + cartItem.instance.currentPrice * cartItem.quantity,
      0,
    );

    // const productAvailibilityInfo = await productAvailibilityChecker(
    //   order.products,
    // );

    // if (!productAvailibilityInfo.productsAvailibilityStatus) {
    //   res.json({
    //     message: "Some of your products are unavailable for now",
    //     productAvailibilityInfo,
    //   });
    // } else {
    // }

    const subscriberMail = req.body.email;
    const letterSubject = `Order confirmation nr ${order.orderNo}`;
    const letterHtmlText = req.body.letterHtml;

    const { errors, isValid } = validateOrderForm(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    if (!letterSubject) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
      });
    }

    if (!letterHtmlText) {
      return res.status(400).json({
        message:
          "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
      });
    }
    const { letterHtml, ...orderData } = order;
    const newOrder = new Order(orderData);

    if (order.customerId) {
      newOrder.populate("customerId").execPopulate();
    }

    newOrder.save().then(async (order) => {
      const mailResult = await sendMail(
        subscriberMail,
        letterSubject,
        letterHtmlText,
        res,
      );

      for (const item of order.products) {
        const id = item.instance._id;
        // const product = await Product.findOne({ _id: id });
        // const productQuantity = product.quantity;
        await Product.findOneAndUpdate(
          { _id: id },
          // { quantity: productQuantity - item.cartQuantity },
          { new: true },
        );
      }

      // res.json({ order, mailResult });
    });
    // .catch((err) =>
    //   res.status(400).json({
    //     message: `Error happened on server: "${err}" `,
    //   }),
    // );

    const lineItems = order.products.map((product) => ({
      price_data: {
        currency: "UAH",
        product_data: {
          name: product.instance.name,
          images: [product.instance.productImg],
          metadata: {
            productId: product.instance.name,
          },
        },
        unit_amount: product.instance.currentPrice * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "UAH",
            product_data: {
              name: "Delivery",
            },
            unit_amount: 50 * 100,
          },
          quantity: 1,
        },
        ...lineItems,
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
    });

    console.log(session);

    res.json({ url: session.url });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `,
    });
  }
};

exports.getSessionData = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    const session = await stripe.checkout.sessions.listLineItems(sessionId);

    res.status(200).json({ success: true, sessionData: session });
  } catch (error) {
    console.error("Error fetching session data:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch session data" });
  }
};

exports.updateOrder = (req, res, next) => {
  Order.findOne({ orderNo: req.params.orderNo }).then(async (currentOrder) => {
    if (!currentOrder) {
      return res.status(400).json({
        message: `Order with orderNo ${req.params.orderNo} is not found`,
      });
    } else {
      const order = _.cloneDeep(req.body);

      // if (req.body.deliveryAddress) {
      //   order.deliveryAddress = req.body.deliveryAddress;
      // }

      // if (req.body.shipping) {
      //   order.shipping = req.body.shipping;
      // }

      // if (req.body.paymentInfo) {
      //   order.paymentInfo = req.body.paymentInfo;
      // }

      // if (req.body.customerId) {
      //   order.customerId = req.body.customerId;
      // }

      // if (req.body.products) {
      //   order.products = req.body.products;

      //   order.totalSum = order.products.reduce(
      //     (sum, cartItem) =>
      //       sum + cartItem.product.currentPrice * cartItem.cartQuantity,
      //     0,
      //   );

      //   const productAvailibilityInfo = await productAvailibilityChecker(
      //     order.products,
      //   );

      //   if (!productAvailibilityInfo.productsAvailibilityStatus) {
      //     res.json({
      //       message: "Some of your products are unavailable for now",
      //       productAvailibilityInfo,
      //     });
      //   }
      // }

      // const subscriberMail = req.body.email;
      // const letterSubject = req.body.letterSubject;
      // const letterHtml = req.body.letterHtml;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      // if (!letterSubject) {
      //   return res.status(400).json({
      //     message:
      //       "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
      //   });
      // }

      // if (!letterHtml) {
      //   return res.status(400).json({
      //     message:
      //       "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
      //   });
      // }

      Order.findOneAndUpdate(
        { orderNo: req.params.orderNo },
        { $set: order },
        { new: true },
      )
        .populate("customerId")
        .then((order) => {
          // const mailResult = await sendMail(
          //   subscriberMail,
          //   letterSubject,
          //   letterHtml,
          //   res,
          // );

          res.json(order);
        })
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          }),
        );
    }
  });
};

exports.cancelOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async (currentOrder) => {
    if (!currentOrder) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found` });
    } else {
      const subscriberMail = req.body.email;
      const letterSubject = req.body.letterSubject;
      const letterHtml = req.body.letterHtml;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
        });
      }

      Order.findOneAndUpdate(
        { _id: req.params.id },
        { canceled: true },
        { new: true },
      )
        .populate("customerId")
        .then(async (order) => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res,
          );

          res.json({ order, mailResult });
        })
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          }),
        );
    }
  });
};
exports.deleteOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async (order) => {
    if (!order) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found.` });
    } else {
      const orderToDelete = await Order.findOne({ _id: req.params.id });

      Order.deleteOne({ _id: req.params.id })
        .then((deletedCount) =>
          res.status(200).json({
            message: `Order witn id "${orderToDelete._id}" is successfully deletes from DB. Order Details: ${orderToDelete}`,
          }),
        )
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          }),
        );
    }
  });
};

exports.getOrders = (req, res, next) => {
  Order.find({ customerId: req.user.id })
    .populate("customerId")
    .then((orders) => res.json(orders))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      }),
    );
};

exports.getAllOrders = (req, res, next) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      }),
    );
};

exports.getOrder = (req, res, next) => {
  Order.findOne({ orderNo: req.params.orderNo })
    .populate("customerId")
    .then((order) => res.json(order))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      }),
    );
};
