import { combineReducers } from 'redux';
import home from '../home';
import statistics from '../statistics';
import players from '../players';

export default combineReducers({
    [home.NAME] : home.reducer,
    [statistics.NAME] : statistics.reducer,
    [players.NAME] : players.reducer
});