import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './surveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {

    const [showFormReview, setState] = useState(false);

    const renderContent = () => {
        if(showFormReview) return <SurveyFormReview onCancel={ () => setState(false) }/>;

        return <SurveyForm onSurveySubmit={() => setState(true) }/>;
    } 

    return(
        <div>
            {renderContent()}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);