const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    gotResponse: { type: Boolean, default: false },
    responseValue: { type: String, default: null }
});

module.exports = recipientSchema;