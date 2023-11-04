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
        collectionOfProduct: {
            type: String,
            required: true
        },
        productImg: {
            type: String,
            required: true
        },
        slidesImageUrls: [
            {
                type: String,
                required: true
            }
        ],
        productUrl: {
            type: String
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        characteristics: [{ vendorCode: { type: String } }, { grape: { type: String } }, { volume: { type: String } }, { color: { type: String } }, { strength: { type: String } }, { sweetness: { type: String } }, { supplyTemperature: { type: String } }, { manufacturerCountry: { type: String } }],
        productDescription: {
            aroma: { type: String },
            taste: { type: String }
        }
    },
    { strict: false }
);

ProductSchema.index({ '$**': 'text' });

module.exports = Product = mongoose.model('products', ProductSchema);
