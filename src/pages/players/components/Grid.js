import React from 'react';
import PropTypes from 'prop-types';
import Figure from './Figure';

const Grid = ({ data, handleClickPlayer }) => {
    return (
        <div className={`row`}>
            {
                data.map((player, index) => {

                    const {image, position, name, } = player;

                    return (
                        <Figure
                            key={`grid-${index}`}
                            image = {image}
                            position = {position}
                            name = {name}
                            handleClick= {() => handleClickPlayer(player)}
                        />
                    );
                })
            }
        </div>
    );
}

Grid.propTypes = {
    /** Información necesaria. */
    data: PropTypes.array
}



export default Grid;