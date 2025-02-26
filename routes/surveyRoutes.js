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
const User = mongoose.model('users');
const crypto = require('crypto');
const keys = require("../config/keys");

module.exports = app => {

    app.delete('/api/surveys/delete/:surveyId', requireLogin, async (req, res) => {
        const surveyInfo = await Survey.deleteOne({ _user: req.user.id, _id: req.params.surveyId });
        if (surveyInfo.acknowledged) {
            const userInfo = await User.updateOne({ _id: req.user.id }, { $inc: { surveyNumber: -1 } }).exec();
            if (userInfo.acknowledged)
                res.send(true);
        }
    });

    app.put('/api/surveys/update/:surveyId/:title', requireLogin, async (req, res) => {
        const surveyInfo = await Survey.updateOne({ _user: req.user.id, _id: req.params.surveyId }, { title: req.params.title });
        if (surveyInfo.acknowledged)
            res.send(true);
    });

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveysList = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });
        res.send(surveysList);
    });

    app.get('/api/surveys/:surveyId', requireLogin, async (req, res) => {
        const surveyInfo = await Survey.findOne({ _user: req.user.id, _id: req.params.surveyId });
        res.send(surveyInfo);
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        // const signature = req.body.signature;
        // const apiKey = "3902a98825010cf4a0764829f7ec6fe6"; // Ensure this is set in .env

        // const hmac = crypto.createHmac('sha256', apiKey);
        // hmac.update(signature.timestamp + signature.token);
        // const expectedSignature = hmac.digest('hex');

        // if (expectedSignature !== signature.signature) {
        //     console.log("Invalid webhook signature");
        //     return res.status(403).send("Unauthorized");
        // }

        // console.log("Webhook Verified:", JSON.stringify(req.body, null, 2));
        // console.log(req.body);
        const parsed = new Path('/api/surveys/:surveyId/:choice');
        // _.chain(req.body)//chain function takes an iterable variable and passes to the all functions called with it 
        //     .map(event => {
        //         if (event.event === 'clicked') {
        //             console.log(event.event.url);
        //             const matched = parsed.test(new URL(event.url).pathname);

        //             if (matched)
        //                 return { email: event.recipient, surveyId: matched.surveyId, choice: matched.choice };
        //         }
        //     })
        //     // const events = _.map(req.body, event => {
        //     //     if (event.event === 'clicked') {
        //     //         const matched = parsed.test(new URL(event.url).pathname);
        //     //         if (matched)
        //     //             return { email: event.recipient, surveyId: matched.surveyId, choice: matched.choice };
        //     //     }
        //     // });
        //     .compact()//removes undefined objects
        //     //.filter(event => event != undefined);
        //     // const compactEvents = _.compact(events);//removes undefined objects

        //     .uniqBy('email', 'surveyId')//removes duplicates
        //     // // const obj = Object.assign({}, ...events);
        //     // const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');//removes duplicates
        //     .each(({ email, surveyId, choice }) => {
        //         Survey.updateOne({
        //             _id: surveyId,
        //             recipients: {
        //                 $elemMatch: { email: email, gotResponse: false, responseValue: null }
        //             }
        //         }, {
        //             $inc: { [choice]: 1 },
        //             $set: { 'recipients.$.gotResponse': true },
        //             $set: { 'recipients.$.responseValue': choice },
        //             lastResponse: new Date()
        //         }).exec();
        //     })
        //     .value();


            if (req.body.event === 'click') {
                // console.log(req.body.link);
                const matched = parsed.test(new URL(req.body.link).pathname);
            
                if (matched) {
                    const email = req.body.email;
                    const surveyId = matched.surveyId;
                    const choice = matched.choice;
            
                    Survey.updateOne(
                        {
                            _id: surveyId,
                            recipients: {
                                $elemMatch: { email: email, gotResponse: false, responseValue: null }
                            }
                        },
                        {
                            $inc: { [choice]: 1 },
                            $set: { 
                                'recipients.$.gotResponse': true,
                                'recipients.$.responseValue': choice 
                            },
                            lastResponse: new Date()
                        }
                    ).exec();
                }
            }
        
        res.send({});
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send(
            `<center style="background-color: #EFBC9B"><h1>Thanks for your feedback!</h1><script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

            <dotlottie-player src="https://lottie.host/61304419-35b9-4a9a-9749-14c995e2dabc/J2B0ejXOHO.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player></center>`
        );
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

        const { from, title, subject, body, recipients } = req.body;

        const survey = new Survey({
            from,
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
            req.user.surveyNumber += 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
};