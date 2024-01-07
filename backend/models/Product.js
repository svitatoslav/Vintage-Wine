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
            type: String,
            required: true
        },
        collectionBelongs: {
            type: String,
        },
        productImg: {
            type: String,
        },
        slidesImageUrls: {
            type: Array,
        },
        productDescription: {
            aroma: { type: String },
            taste: { type: String }
        },
        characteristics: {
            vendorCode: { type: String, required: true },
            grape: { type: String },
            volume: { type: String, required: true },
            color: { type: String },
            strength: { type: String, required: true },
            sweetness: { type: String },
            supplyTemperature: { type: String },
            country: { type: String, required: true },
            year: { type: Number },
          },
    },
    { strict: false }
);

ProductSchema.index({ '$**': 'text' });

module.exports = Product = mongoose.model('products', ProductSchema);
