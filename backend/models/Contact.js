const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobilePhone: {
            type: String,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        isRead: {
            type: Boolean,
            required: true,
            default: false
        }
    }
)

module.exports = Contact = mongoose.model('contact', ContactSchema);