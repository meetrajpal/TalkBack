import { combineReducers } from 'redux';
import { reducer as formReducers } from 'redux-form';
import authReducers from './authReducers';

export default combineReducers({
    auth: authReducers,
    form: formReducers
});