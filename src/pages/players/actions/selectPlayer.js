import {SELECT_PLAYER} from '../actionTypes';
import openModal from './openModal';

export default function selectPlayer(player){
    return (dispatch) => {
        dispatch({
            type: SELECT_PLAYER,
            payload : player
        });
        dispatch(openModal());
    };
}