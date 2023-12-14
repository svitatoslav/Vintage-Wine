const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        currentPrice: {
            type: Number,
            required: true
        },
        categories: {
            type: String,
            required: true
        },
        cartDescription: {
            type: String
        },
        collectionBelongs: {
            type: String,
            required: true
        },
        productImg: {
            type: String,
        },
        slidesImageUrls: {
            type: Array,
        },
        productDescription: {
            aroma: { type: String, required: true },
            taste: { type: String, required: true }
        },
        characteristics: {
            vendorCode: { type: String, required: true },
            grape: { type: String, required: true },
            volume: { type: String, required: true },
            color: { type: String, required: true },
            strength: { type: String, required: true },
            sweetness: { type: String, required: true },
            supplyTemperature: { type: String, required: true },
            country: { type: String, required: true },
            year: { type: Number, required: true },
          },
    },
    { strict: false }
);

ProductSchema.index({ '$**': 'text' });

module.exports = Product = mongoose.model('products', ProductSchema);
