const mailgun = require("mailgun-js");
const keys = require("../config/keys");

// const mg = mailgun({ apiKey: keys.mailgun, domain: keys.mailgunDomain });
const SibApiV3Sdk = require('sib-api-v3-sdk');

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = keys.brevo;
const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

class Mailer {
    constructor({ from, subject, body, recipients }, content) {
        this.from_email = from;
        this.subject = subject;
        this.text = body.toJSON;
        this.html = content;
        this.recipients = recipients;
        // this.recipients = this.formatRecipients(recipients);
        
    }

    formatRecipients(recipients) {
        return recipients.map((value) => {
            return value.email;
        });
    }

    async send() {
        // const data = {
        //     from: this.from_email,
        //     to: this.recipients,
        //     subject: this.subject,
        //     text: this.text,
        //     html: this.html
        // };

        // const response = await mg.messages().send(data);
        // if (response.id)
        //     return response;
        // else
        //     return "Error sending mail.";

        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        sendSmtpEmail.subject = this.subject;
        sendSmtpEmail.htmlContent = this.html;
        sendSmtpEmail.sender = { name: this.from_email, email: "talkback.onrender@gmail.com" };
        sendSmtpEmail.to = this.recipients;

        const response = await emailApi.sendTransacEmail(sendSmtpEmail);
        console.log("Email sent successfully:", response);
    }
}

module.exports = Mailer;