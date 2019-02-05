import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

const Statistics = ({ data }) => {
    return (
        <div>
            {
                data.map(({
                    position,
                    gamePlayed,
                    goalDifference,
                    points,
                    team,
                    image
                }, index) => {
                    return <StatisticItem
                        key={`statistics-${index}`}
                        position={position}
                        gamePlayed={gamePlayed}
                        goalDifference={goalDifference}
                        points={points}
                        team={team}
                        image={image}
                    />;
                })
            }

        </div>
    );
}

Statistics.propTypes = {
    /** Informacion */
    data: PropTypes.array
};

export default Statistics;