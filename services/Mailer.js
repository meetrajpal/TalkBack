const mailgun = require("mailgun-js");
const keys = require("../config/keys");

const mg = mailgun({ apiKey: keys.mailgun, domain: keys.mailgunDomain });

class Mailer {
    constructor({ from, subject, body, recipients }, content) {
        this.from_email = from;
        this.subject = subject;
        this.text = body.toJSON;
        this.html = content;
        this.recipients = this.formatRecipients(recipients);
    }

    formatRecipients(recipients) {
        return recipients.map((value) => {
            return value.email;
        });
    }

    async send() {
        const data = {
            from: this.from_email,
            to: this.recipients,
            subject: this.subject,
            text: this.text,
            html: this.html
        };

        const response = await mg.messages().send(data, function (error, body) {
            console.log(body);
        });
        return response;
    }
}

module.exports = Mailer;