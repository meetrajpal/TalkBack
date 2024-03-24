import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, FETCH_SURVEY_INFO } from './types';

export const fetchUser = () =>
    async (dispatch) => {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
        // dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user').data });
    }

export const handleToken = (token) =>
    async (dispatch) => {
        const res = await axios.post('/api/stripe', token);
        dispatch({ type: FETCH_USER, payload: res.data });
    }

export const submitSurvey = (values, navigate) =>
    async (dispatch) => {
        const res = await axios.post('/api/surveys', values);
        dispatch({ type: FETCH_USER, payload: res.data });
        navigate('/surveys');
    };

export const fetchSurveys = () =>
    async (dispatch) => {
        const res = await axios.get('/api/surveys');
        dispatch({ type: FETCH_SURVEYS, payload: res.data });
    };

export const fetchSurveyInfo = (surveyId) =>
    async (dispatch) => {
        const res = await axios.get(`/api/surveys/${surveyId}`);
        dispatch({ type: FETCH_SURVEY_INFO, payload: res.data });
    };