import {RSAA} from 'redux-api-middleware';
import { API_URL, IMG_URL_VENADOS } from "../constants";
import {FETCH_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE} from '../actionTypes';
import moment from 'moment';

/** Obtener los juegos. */
export default function fetchGames() {
    return (dispatch) => {
        return dispatch({
            [RSAA]: {
                endpoint: `${API_URL}/games`,
                headers: { 
                    'accept': 'application/json'
                },
                method: 'GET',
                types: [
                    FETCH_GAMES,
                    {
                        type: FETCH_GAMES_SUCCESS,
                        payload: onSuccess
                    },
                    FETCH_GAMES_FAILURE
                ]
            }
        });
    };
}

/** Función para dar formato a la respuesta del servicio. */
const onSuccess = (action, state, res) => {
        const contentType = res.headers.get('Content-Type');
        if (contentType && ~contentType.indexOf('json')) {
          return res.json().then((json) => {

            const coupMxGames = filterGamesByLeague(json.data.games, 'Copa MX');
            const ascentMx = filterGamesByLeague(json.data.games, 'Ascenso MX');

            const coupMXGroupedByMonth = groupByMonth(coupMxGames);
            const ascentMxGroupedByMonth = groupByMonth(ascentMx);

            return {
                coupMX : formatResponse(coupMXGroupedByMonth),
                ascentMX: formatResponse(ascentMxGroupedByMonth)
            };
          });
        }
}

/** Filtra los juegos por liga. */
function filterGamesByLeague(games, league){
    return games.filter((game) => {
        return game.league == league;
    });
}

/** Agrupa los juegos por meses. */
function groupByMonth(games){

    return games.reduce((groups, game) => {
        let check = moment(game.datetime, 'YYYY/MM/DD').locale('es');
        let month = check.format('MMMM').toUpperCase();
        let gameFormatted = {
            dayNumber : check.format('DD'),
            dayName : check.format('ddd').toUpperCase(),
            localImage : game.local ? IMG_URL_VENADOS : game.opponent_image,
            localName : game.local ? 'Venados F.C.' : game.opponent,
            opponentImage : !game.local ? IMG_URL_VENADOS : game.opponent_image,
            opponent : !game.local ? 'Venados F.C.' : game.opponent,
            homeScore : game.home_score,
            awayScore : game.away_score,
            startAt: moment(game.datetime).format('YYYYMMDDTHHmmss'),
            endsAt: moment(game.datetime).add(90, 'minutes').format('YYYYMMDDTHHmmssz')
        };

        groups[month]= groups[month] || [];
        groups[month].push(gameFormatted);
        
        return groups;
    }, {});
}

/** Formato final de la respuesta. */
function formatResponse(data){
    let response = []; 
    for (let item in data) { 
        response.push({
            month : item,
            games : data[item]
        });
    }
    return response;
}
