import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const StatisticItem = ({ position, gamePlayed, goalDifference, points, team, image }) => {
    return (
        <div className={`row align-items-center text-center ${styles.container}`}>
            <div className="col-1">
                <span className={styles.position}>{position}</span>
            </div>
            <div className="col-5">
                <img alt="" className={styles.image} src={image} />
                <div className={styles.nameTeam}>{team}</div>
            </div>
            <div className="col-2">
                <span className={styles.number}>{gamePlayed}</span>
            </div>
            <div className="col-2">
                <span className={styles.number}>{goalDifference}</span>
            </div>
            <div className="col-2">
                <span className={styles.number}>{ points }</span>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#257700",
        padding: "15px 0px 15px 0px",
        marginTop: 5,
        boxShadow: "3px 4px 11px rgba(0, 0, 0, .4)"
    }),
    image: css({
        width: 60,
        '@media(min-width: 576px)': {
            width: 110,
        }
    }),
    position: css({
        fontSize: 35,
        color: "#fff",
        '@media(min-width: 576px)': {
            position: 45,
        }
    }),
    nameTeam: css({
        fontSize: 15,
        color: "#fff",
        '@media(min-width: 576px)': {
            fontSize: 18,
        }
    }),
    number: css({
        fontSize: 17,
        color: "#fff",
        '@media(min-width: 576px)': {
            fontSize: 22,
        }
    })
}

StatisticItem.propTypes = {
    /** Posicion del jugador. */
    position: PropTypes.number,

    /** Partidos jugados */
    gamePlayed: PropTypes.number, 

    /** Diferencia de goles */
    goalDifference: PropTypes.number,

    /** Puntos */
    points: PropTypes.number,

    /** Equipo */
    team: PropTypes.string,

    /** Imagen */
    image: PropTypes.string
};

export default StatisticItem;