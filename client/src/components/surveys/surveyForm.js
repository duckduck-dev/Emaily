import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './surveyField';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


const surveyForm = props => {

    const { handleSubmit, onSurveySubmit } = props;

    const renderFields = () => {
        return _.map(formFields, field => {
                return <Field component={SurveyField} type="text" label={field.label} name={field.name} key={field.name} />;
        } );
    };

    return(
        <div>
            <form onSubmit={ handleSubmit( onSurveySubmit ) }>
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

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ( { name, noValueError } ) => {
            if(!values[name]) errors[name] = noValueError;
    } );

    return errors;
};

export default reduxForm( {
    validate,
    destroyOnUnmount: false,
    form: 'surveyForm' } ) (surveyForm);