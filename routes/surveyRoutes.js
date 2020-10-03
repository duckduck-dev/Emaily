const _  = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get( '/api/surveys', async(req, res) => {
        const surveys = await Survey.find( { _user: req.user.id } ).select( { recipients: false } );
        res.send(surveys);
    } );

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send("Thanks for voting!");
    } );

    app.post('/api/surveys/webhooks', (req, res) => {
        const pattern = new Path('/api/surveys/:surveyId/:choice');

           /*const events = _.map(req.body, ({email, url}) => {
                const pathname = new URL(url).pathname;
                const match = pattern.test(pathname);
                if(match){
                    return {
                        email,
                        surveyId: match.surveyId,
                        choice: match.choice
                    };
                }

            });
            //Return an event objects which is not undefined. 
            const compactEvents = _.compact(events);
            const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");
            console.log(uniqueEvents);*/

            //lodash chain helper
            _.chain(req.body)
                        .map(({email, url}) => {
                        const match = pattern.test(new URL(url).pathname);
                        if(match) return {email, surveyId: match.surveyId, choice: match.choice}  })
                        .compact()
                        .uniqBy('email', 'surveyId')
                        .each( ({ surveyId, email, choice }) => {
                                Survey.updateOne( {
                                        _id: surveyId,
                                        recipients: {
                                            $elemMatch: { email: email, responded: false }
                                        }
                                    }, {
                                        $inc: { [choice]: 1 },
                                        $set: { 'recipients.$.responded': true },
                                        lastResponded: new Date()
                                    } ).exec();
                            })
                        .value();
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
