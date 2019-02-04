import React from 'react';
import PropTypes from 'prop-types';
import Figure from './Figure';
import { css } from 'glamor';

const Grid = ({ data, handleClickPlayer }) => {
    return (
        <div className={`row ${styles.container}`}>
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

const styles = {
    container: css({
        backgroundColor: '#fff'
    })
}

Grid.propTypes = {
    /** Información necesaria. */
    data: PropTypes.array
}



export default Grid;