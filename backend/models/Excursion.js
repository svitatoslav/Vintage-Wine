const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcursionSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,      
      required: true
    },
    imageURL: {
      type: String,
    },
    reservations: {
      type: Array,
    }
  },
  { strict: false }
);

module.exports = Partner = mongoose.model("excursions", ExcursionSchema);
