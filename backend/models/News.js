const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const NewsSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: Array,
            required: true
        },
        image: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        tags: {
            type: Array
        },
        related: [{
            type: ObjectId,
            ref: "news"
        }]
    }
)

module.exports = News = mongoose.model('news', NewsSchema);
