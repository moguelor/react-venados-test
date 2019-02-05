import { RSAA } from 'redux-api-middleware';
import { API_URL } from "../constants";
import { FETCH_PLAYERS, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_FAILURE } from '../actionTypes';

/** Obtener los jugadores. */
export default function fetchPlayers() {
    return (dispatch) => {
        return dispatch({
            [RSAA]: {
                endpoint: `${API_URL}/players`,
                headers: {
                    'accept': 'application/json'
                },
                method: 'GET',
                types: [
                    FETCH_PLAYERS,
                    {
                        type: FETCH_PLAYERS_SUCCESS,
                        payload: onSuccess
                    },
                    FETCH_PLAYERS_FAILURE
                ]
            }
        });
    };
}

/** Función para dar formato a la respuesta del servicio. */
const onSuccess = (action, state, res) => {
    const contentType = res.headers.get('Content-Type');
    if (contentType && ~contentType.indexOf('json')) {
        return res.json().then(({ data: { team: { forwards, centers, defenses, goalkeepers, coaches } } }) => {
            return [...forwards, ...centers, ...defenses, ...goalkeepers, ...coaches];
        });
    }
}