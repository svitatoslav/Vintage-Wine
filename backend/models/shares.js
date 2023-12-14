const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SharesSchema = new Schema(
    {
        imageURL: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pathParts: {
            type: String,
            required: true
        },
        conditions: {
            type: String,
            required: true
        },
        productCategories: {
            type: String,
            required: true
        }
    }
)

module.exports = Shares = mongoose.model('shares', SharesSchema);
