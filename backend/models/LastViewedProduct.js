const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LastViewedProductSchema = new Schema(
    {
        productId: { type: String}
    },
);

module.exports = LastViewedProduct = mongoose.model('last-viewed-products', LastViewedProductSchema, 'last-viewed-products');
