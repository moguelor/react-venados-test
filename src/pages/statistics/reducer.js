import { FETCH_STATISTICS, FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_FAILURE } from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    /** Bandera para saber si el servicio se ha terminado de consumir. */
    isFetching: false,
    /**
     * Información obtenida del servicio.
     * Nota: Se agrego un elemento por default por que el servicio consumido
     *       te devuelve las estadisticas vaciás.
     */
    data: [{
        position: 1,
        gamePlayed: 2,
        goalDifference: 5,
        points: 6,
        team: 'Venados F.C.',
        image: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png'
    }],
    /** En caso de error. */
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FETCH_STATISTICS:
            return update(state, { isFetching: { $set: true } });

        /** 
         * Se comenta para mostrar algo en pantalla 
         * ya que el servicio no proporciono ningun resultado disponible. 
         * */
        case FETCH_STATISTICS_SUCCESS:
            return update(state, { isFetching: { $set: false } });

        case FETCH_STATISTICS_FAILURE:
            return update(state, { isFetching: { $set: false }, error: { $set: action.payload } });

        default:
            return state;
    }
}