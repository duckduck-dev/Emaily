import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import formFields from './formFields'
import { submitSurvey } from '../../actions/index';
import { withRouter } from 'react-router-dom';
export default withRouter(( { onCancel, history } ) => {

    const { surveyForm: { values } } = useSelector(stat => stat.form);
    const dispatch = useDispatch();

    const renderContent = _.map(formFields, ( { label, name } ) => {
                    return(
                    <div key={label} >
                    <label>{ label }</label>
                    <div>{values[name]}</div>
                    </div>
                    );
        } );

    return(
        <div>
                <h5>Please confirm your entries</h5>
                        {renderContent}
                <button className="yellow btn-flat" onClick={ onCancel }>Back</button>
                <button onClick={() => dispatch(submitSurvey(history))} className="blue btn-flat right" >send<i className="material-icons right">email</i></button>
        </div>
    );
});