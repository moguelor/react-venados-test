import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import GameList from './GameList';

const MatchList = ({ items }) => {
    return (
        <div className={`row ${styles.container}`}>
            {
                items.map(({ group, games }, index) => {
                    return (
                        <div key={`match-list-${index}`} className="col-12">
                            <div className={`row ${styles.monthBar}`}>{group}</div>
                            <GameList games={games} />
                        </div>
                    );
                })
            }
        </div>
    );
}

const styles = {
    container: css({
        backgroundColor: "#257700"
    }),
    monthBar: css({
        backgroundColor: "#7f7f7f",
        color: "#fff",
        padding: "5px 15px 5px",
        fontSize: 15
    })
}

MatchList.propTypes = {
    /** Elementos de la lista */
    items : PropTypes.array
};

export default MatchList;