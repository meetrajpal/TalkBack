const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    from: String,
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    veryBad: { type: Number, default: 0 },
    bad: { type: Number, default: 0 },
    good: { type: Number, default: 0 },
    veryGood: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponse: Date
});

mongoose.model('surveys', surveySchema);