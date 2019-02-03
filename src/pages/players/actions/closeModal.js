import {CLOSE_MODAL} from '../actionTypes';

export default function closeModal(){
    return {
        type: CLOSE_MODAL,
        payload: false
    };
};