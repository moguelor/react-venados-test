import {SELECT_TAB_COUP,SELECT_TAB_ASCENT, FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isFetching: false,
    data: [],
    error: null,
    isSelectedCoupMx : false,
    isSelectedAscent : true
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_TAB_COUP:
        return update(state, {isSelectedCoupMx: {$set: true}, isSelectedAscent: {$set: false}});

        case SELECT_TAB_ASCENT:
        return update(state, {isSelectedCoupMx: {$set: false}, isSelectedAscent: {$set: true}});

        case FETCH_GAMES:
        return update(state, {isFetching: {$set: true}});
        
        case FETCH_GAMES_SUCCESS:
        return update(state, {isFetching: {$set: false}, data: {$set: action.payload}});

        case FETCH_GAMES_FAILURE:
        return update(state, {isFetching: {$set: false}, error: {$set: action.payload}});

        default:
        return state;
    }
}