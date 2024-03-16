import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
import authReducers from './authReducer';
import surveysReducer from './surveysReducer';
export default combineReducers({
    auth: authReducers,
    form: formReducers,
    surveys: surveysReducer
});