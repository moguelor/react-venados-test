import { FETCH_PLAYERS, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILURE} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isFetching: false,
    data: [],
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PLAYERS:
        return update(state, {isFetching: {$set: true}});
        
        case FETCH_PLAYERS_SUCCESS:
        return update(state, {isFetching: {$set: false}, data: {$set: action.payload}});

        case FETCH_PLAYERS_FAILURE:
        return update(state, {isFetching: {$set: false}, error: {$set: action.payload}});

        default:
        return state;
    }
}