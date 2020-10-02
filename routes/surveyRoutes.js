const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send("Thanks for voting!");
    } );

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});
    });

    app.post( '/api/surveys', requireLogin, requireCredits, async (req, res) => {
            const { title, subject, body, recipients } = req.body;
            
            //spliting the ',' separated array of recipients and returning them as separate objects.
            const emailObjects = recipients.split(',').map(email => ( {email: email.trim()} ) );
            
            const survey = new Survey( {
                title,
                subject,
                body,
                recipients: emailObjects,
                _user: req.user.id,
                dateSent: Date.now()
            } );
            console.log(survey.id);
            const mailer = new Mailer(survey, surveyTemplate(survey));
            try{
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
            }
            catch(e){
                res.status(422).send(e);
            }
    } );
};
