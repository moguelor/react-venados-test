import {SELECT_TAB_COUP,SELECT_TAB_ASCENT} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isSelectedCoupMx : true,
    isSelectedAscent : false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_TAB_COUP:
        return update(state, {isSelectedCoupMx: {$set: true}, isSelectedAscent: {$set: false}});

        case SELECT_TAB_ASCENT:
        return update(state, {isSelectedCoupMx: {$set: false}, isSelectedAscent: {$set: true}});
        
        default:
        return state;
    }
}