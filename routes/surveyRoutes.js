const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post( '/api/surveys', requireLogin, requireCredits, (req, res) => {
            const { title, subject, body, recipients } = req.body;
            
            //spliting the ',' separated array of recipients and returning them as separate objects.
            const emailObjects = recipients.split(',').map(email => ( { email : email.trim() } ) );
            
            const survey = new Survey( {
                title,
                subject,
                body,
                recipients: emailObjects,
                _user: req.user.id,
                dateSent: Date.now()
            } );
            
            const mailer = new Mailer(survey, surveyTemplate(survey));
    } );
};
