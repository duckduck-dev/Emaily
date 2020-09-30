import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import _ from 'lodash';

const FIELDS = [ { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
{ label: 'Subject Line', name: 'subject', noValueError: 'You must provide a subject' },
{ label: 'Email body', name: 'body', noValueError: 'You must provide a body' },
{ label: 'Recipient List', name: 'emails', noValueError: 'You must provide atleast one recipient.' }
];


const surveyForm = props => {

    const { handleSubmit } = props;

    const renderFields = () => {
        return _.map(FIELDS, field => {
                return <Field component={SurveyField} type="text" label={field.label} name={field.name} key={field.name} />;
        } );
    };

    return(
        
        <div>
            <form onSubmit={ handleSubmit( val => console.log(val) ) }>
                {renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button type="submit"  className="blue btn-flat right white-text" >Next<i className="material-icons right">done</i></button>
            </form>
        </div>
    );
};


const validate = values => {
    const errors = {};

    _.each(FIELDS, ( { name, noValueError } ) => {
            if(!values[name]) errors[name] = noValueError;
    } );
    return errors;
};

export default reduxForm( {
    validate,
    form: 'surveyForm' } ) (surveyForm);