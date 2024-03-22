import { FETCH_SURVEY_INFO } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SURVEY_INFO:
            return action.payload;
        default:
            return state;
    }
}