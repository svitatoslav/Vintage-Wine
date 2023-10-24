const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        vendorCode: {
            type: String,
            required: true
        },
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
        grape: {
            type: String
        },
        volume: {
            type: String
        },
        color: {
            type: String
        },
        strength: {
            type: String
        },
        sweetness: {
            type: String
        },
        supplyTemperature: {
            type: String
        },
        manufacturerCountry: {
            type: String
        }
    },
    { strict: false }
);

ProductSchema.index({ '$**': 'text' });

module.exports = Product = mongoose.model('products', ProductSchema);
