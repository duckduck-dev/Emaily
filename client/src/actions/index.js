import axios from 'axios';
import {FETCH_USER, FETCH_SURVEYS} from './types';

export const fetchUser = () => async dispatch => {

      const res = await axios.get('/api/current_user');
      dispatch( { type : FETCH_USER, payload : res.data } );
};

export const handleToken = token => async dispatch => {

      const res = await axios.post('/api/stripe', token );
      dispatch( { type: FETCH_USER, payload: res.data } ); 
};

export const submitSurvey = history   => async (dispatch,  getState) => {

      const survey = getState().form.surveyForm.values;
      const res = await axios.post('/api/surveys', survey);
      history.push('/surveys');
      dispatch( { type: FETCH_USER, payload: res.data } );
};

export const fetchSurveys = () => async dispatch => {
      
      const surveys = await axios.get('/api/surveys');
      dispatch( { type: FETCH_SURVEYS, payload: surveys.data } );
};