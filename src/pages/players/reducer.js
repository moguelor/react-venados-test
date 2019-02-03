import { 
    FETCH_PLAYERS, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILURE,
    OPEN_MODAL, CLOSE_MODAL, SELECT_PLAYER
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isFetching: false,
    data: [],
    error: null,
    isOpenModal : false,
    selectedPlayer : {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PLAYERS:
        return update(state, {isFetching: {$set: true}});
        
        case FETCH_PLAYERS_SUCCESS:
        return update(state, {isFetching: {$set: false}, data: {$set: action.payload}});

        case FETCH_PLAYERS_FAILURE:
        return update(state, {isFetching: {$set: false}, error: {$set: action.payload}});

        case SELECT_PLAYER:
        return update(state, {selectedPlayer: {$set: action.payload}});

        case OPEN_MODAL:
        return update(state, {isOpenModal: {$set: true}});

        case CLOSE_MODAL:
        return update(state, {isOpenModal: {$set: false}});

        default:
        return state;
    }
}