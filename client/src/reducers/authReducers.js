import { FETCH_USER } from "../actions/types";

function fetchingUser (state = null, action){
    switch (action.type){
        case FETCH_USER:
            return action.payload || false;
            break;
        default:
            return state;
    }
}
// eslint-disable-next-line;
export default fetchingUser;