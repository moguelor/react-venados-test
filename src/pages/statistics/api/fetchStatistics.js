import {RSAA} from 'redux-api-middleware';
import { API_URL } from "../constants";
import {FETCH_STATISTICS, FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_FAILURE} from '../actionTypes';

/** Obtener las estadisticas. */
export default function fetchStatistics() {
    return (dispatch) => {
        return dispatch({
            [RSAA]: {
                endpoint: `${API_URL}/statistics`,
                headers: { 
                    'accept': 'application/json'
                },
                method: 'GET',
                types: [
                    FETCH_STATISTICS,
                    FETCH_STATISTICS_SUCCESS,
                    FETCH_STATISTICS_FAILURE
                ]
            }
        });
    };
}