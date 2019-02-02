import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

const GameList = ({ games }) => {
    return (
        <div>
            {
                games.map(({dayName, dayNumber, opponentImage, localImage, opponent, homeScore, awayScore, localName}, index) => {
                    return (
                        <div key={`game-list-${index}`} className={`row align-items-center ${styles.container}`}>
                            <div className={`col ${styles.day}`}>
                                <span className={`fa fa-calendar ${styles.icon}`} /><br/>
                                {dayNumber} <br/>
                                {dayName}
                            </div>
                            <div className="col">
                                <img 
                                    alt="" 
                                    className={styles.image} 
                                    src={localImage} 
                                /> 
                                <div>{localName}</div>
                            </div>
                            <div className={`col ${styles.score}`}>{homeScore} - {awayScore}</div>
                            <div className="col">
                                <img 
                                    alt="" 
                                    className={styles.image} 
                                    src={opponentImage} 
                                />
                                <div className={styles.nameTeam}>{opponent}</div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

const styles = {
    container : css({
        color: "#fff",
        textAlign: "center",
        padding: "20px 0px 20px 0px"
    }),
    icon: css({
        fontSize: 30
    }),
    day: css({
        fontSize: 20,
        fontWeight: 300
    }),
    image: css({
        width : 64,
        marginBottom: 10
    }),
    score: css({
        fontSize: 35
    })
};

GameList.propTypes = {
    /** Todos los juegos. */
    games : PropTypes.array
}

export default GameList;