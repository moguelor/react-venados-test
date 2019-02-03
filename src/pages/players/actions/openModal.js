import {OPEN_MODAL} from '../actionTypes';

export default function openModal(){
    return {
        type: OPEN_MODAL,
        payload: true
    };
};