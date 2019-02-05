import { CLOSE_MODAL } from '../actionTypes';

/** Acción para cerrar el modal. */
export default function closeModal() {
    return {
        type: CLOSE_MODAL,
        payload: false
    };
};