import {NAME} from './constants';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { SHOW_SIDEBAR, HIDE_SIDEBAR } from './actionTypes';
import update from 'immutability-helper';
import home from '../home';
import statistics from '../statistics';
import players from '../players';

const INITIAL_STATE = {
    isOpen: false,
};

let mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
        return update(state, {isOpen: {$set: true}});

        case HIDE_SIDEBAR:
        return update(state, {isOpen: {$set: false}});
        
        default:
        return state;
    }
}

// const rootReducer = combineReducers({
//     router: () => {},
//     [NAME] :  mainReducer, 
//     [home.NAME] : home.reducer,
//     [statistics.NAME] : statistics.reducer,
//     [players.NAME] : players.reducer
// });
  
// export default rootReducer;

export default (history) => {
    return combineReducers({
        router: connectRouter(history),
        [NAME] :  mainReducer,
        [home.NAME] : home.reducer,
        [statistics.NAME] : statistics.reducer,
        [players.NAME] : players.reducer
    });
}
