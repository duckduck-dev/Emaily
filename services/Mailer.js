const { request } = require('express');
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

//creating a mailer class with survey data and template to send that  to sendgird.
//Mailer will be sent as JSON to sendgrid.
//sendgrid scans the body of the mail and if any link found it puts token for each recipient links to keep track of the user
//once user responds, response will be collected by webHooks.
//Inorder to construct email(to make the email work) use helper(from sendgrid lib);

class Mailer extends helper.Mail {
        constructor( { subject, recipients }, content ) {
            super();
            
            this.sgApi = sendgrid(keys.sendGridKey);
            this.from_email = new helper.Email('bittergourd76@gmail.com');
            this.subject = subject;
            this.body = new helper.Content('text/html', content);
            this.recipients = this.formatAddresses(recipients);

            //just setting up the content(line 17) is not enough to construct the mail
            //use addContent(from helper.Mail) to make it work
            //taking the formatted recipients and adding them to Mailer(addRecipients) 
            this.addContent(this.body);
            this.addClickTracking();
            this.addRecipients();
        }

        //formatAddresses => list of distinct recipients(multiple people).
        //pull off email prop from every recipient object and format it with helper.
        formatAddresses(recipients) {
           return recipients.map( ( {email} ) => {
                return new helper.Email(email)
            } );
        }

        addClickTracking() {
            const trackingSettings = new helper.TrackingSettings();
            const clickTracking = new helper.ClickTracking(true, true);

            trackingSettings.setClickTracking(clickTracking);
            this.addTrackingSettings(trackingSettings);
        }

        addRecipients() {
            const personalize = new helper.Personalization();
            this.recipients.forEach(recipient => {
                personalize.addTo(recipient)
            } );
            this.addPersonalization(personalize);
        }

        async send() {
                const request = this.sgApi.emptyRequest( {
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: this.toJSON()
                } );

                const response = await this.sgApi.API(request);
                return response;
        }
}

module.exports = Mailer;