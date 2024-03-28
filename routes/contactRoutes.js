const requireLogin = require('../middlewares/requireLogin');
const mailgun = require("mailgun-js");
const keys = require("../config/keys");
const mg = mailgun({ apiKey: keys.mailgun, domain: keys.mailgunDomain });

module.exports = app => {
    app.post('/api/contact', requireLogin, async (req, res) => {
        const { name, mail, msg } = req.body;
        const data = {
            from: mail,
            to: keys.contactMail,
            subject: `${name} contacted using TalkBack App`,
            text: msg
        };
        const response = await mg.messages().send(data);
        if (response.id)
            res.send(true);
    });
}