import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

/** Da formato al link. */
const getLink = (localName, opponent, startAt, endsAt) => {

    let link = 'https://www.google.com/calendar/render?action=TEMPLATE';
    link += `&text=Partido+${localName}+vs+${opponent}`;
    link += `&dates=${startAt}/${endsAt}`;
    link += `&details=Apoya+a+tu+equipo+favorito`;
    link += `&location=Merida+Yucatan`

    return link;
}

const GameList = ({ games }) => {
    return (
        <div>
            {
                games.map(({dayName, dayNumber, opponentImage, localImage, opponent, homeScore, awayScore, localName, startAt, endsAt}, index) => {
                    return (
                        <div key={`game-list-${index}`} className={`row align-items-center ${styles.container}`}>
                            <div className={`col ${styles.day}`}>
                                <a  target="_blank"  href={getLink(localName, opponent, startAt, endsAt)}>
                                    <span className={`fa fa-calendar ${styles.icon}`} /><br/>
                                    {dayNumber} <br/>
                                    {dayName}
                                </a>
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
        fontSize: 24
    }),
    day: css({
        fontSize: 17,
        fontWeight: 300,
        '& a' : {
            color: '#fff'
        }
    }),
    image: css({
        width : 54,
        marginBottom: 10
    }),
    score: css({
        fontSize: 45,
        '@media(max-width: 576px)': {
            fontSize: 25,
        }
    })
};

GameList.propTypes = {
    /** Todos los juegos. */
    games : PropTypes.array
}

export default GameList;