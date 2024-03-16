const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { match } = require('assert');
const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveysList = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });
        res.send(surveysList);
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        // console.log(req.body['event-data']);
        const parsed = new Path('/api/surveys/:surveyId/:choice');
        // const events = _.map(req.body, event => {
        //     if (event.event === 'clicked') {
        //         const matched = parsed.test(new URL(event.url).pathname);
        //         if (matched)
        //             return { email: event.recipient, surveyId: matched.surveyId, choice: matched.choice };
        //     }
        // });//.filter(event => event != undefined);
        // // const obj = Object.assign({}, ...events);

        // const compactEvents = _.compact(events);//removes undefined objects
        // const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');//removes duplicates
        // console.log(uniqueEvents);

        _.chain(req.body)//chain function takes an iterable variable and passes to the all functions called with it 
            .map(event => {
                if (event.event === 'clicked') {
                    const matched = parsed.test(new URL(event.url).pathname);
                    if (matched)
                        return { email: event.recipient, surveyId: matched.surveyId, choice: matched.choice };
                }
            })
            .compact()//removes undefined objects
            .uniqBy('email', 'surveyId')//removes duplicates
            .each(({ email, surveyId, choice }) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, gotResponse: false }
                    }
                }, {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.gotResponse': true },
                    lastResponse: new Date()
                }).exec();
            })
            .value();
        res.send({});
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send("<h1><center>Thanks for your feedback!</center></h1>");
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title, //same as title: title,
            subject,
            body,
            recipients: recipients.split(',').map(email => { return { email: email.trim() } }), // map(email => ({ email })) is same as map(email => { return { email: email}})
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mailer = new Mailer(survey, surveyTemplate(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};