import hideSidebar from './hideSidebar';
import { push } from "connected-react-router";

export default function redirect(url){
    return (dispatch) => {
        dispatch(push(url));
        dispatch(hideSidebar());
    }
}