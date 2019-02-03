import { combineReducers } from 'redux';
import home from '../home';
import statistics from '../statistics';

export default combineReducers({
    [home.NAME] : home.reducer,
    [statistics.NAME] : statistics.reducer
});