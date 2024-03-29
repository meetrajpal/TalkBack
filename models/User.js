const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: String,
    name: String,
    emailId: String,
    credits: { type: Number, default: 0 },
    surveyNumber: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);