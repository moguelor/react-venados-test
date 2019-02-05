import hideSidebar from './hideSidebar';
import { push } from "connected-react-router";

/**
 * Función para que al hacer click en cualquier
 * elemento del menú cierre en automatico el sidebar.
 */
export default function redirect(url) {
    return (dispatch) => {
        dispatch(push(url));
        dispatch(hideSidebar());
    }
}