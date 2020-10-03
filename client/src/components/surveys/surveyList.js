import React, { useEffect } from 'react';
import { fetchSurveys } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

export default () => {

    const state = useSelector(state => state.surveys);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchSurveys());
    } , [dispatch]);

    const renderSurveys = state.reverse().map(survey => {
        return(
            <div key={survey._id} className="card blue-grey darken-1 card-panel hoverable">
                <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>{survey.body}</p>
                    <p className="right">Sent On : {new Date(survey.dateSent).toLocaleDateString()}</p>
                </div>
                <div className="card-action">
                    <a href="">Yes: {survey.Yes}</a>
                    <a href="">No: {survey.No}</a>
                </div>
            </div>
        );
    });

    return(
        <div>
            {renderSurveys}
        </div>
    );
};