import {OPEN_MODAL} from '../actionTypes';

/** Acción para abrir el modal. */
export default function openModal(){
    return {
        type: OPEN_MODAL,
        payload: true
    };
};