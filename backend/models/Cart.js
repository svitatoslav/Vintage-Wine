const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true
    },
    products: [
      {
        instance: {
          type: Object,
          ref: "products"
        },
        quantity: {
          type: Number
        }
      }
    ],
    // date: {
    //   type: Date,
    //   default: Date.now
    // }
  },
  { strict: false }
);

module.exports = Cart = mongoose.model("cart", CartSchema, "cart");
