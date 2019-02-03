import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Figure from './Figure';

const Grid = ({ data }) => {
    return (
        <div className={`row`}>
            {
                data.map(({image, position, name}, index) => {
                    return (
                        <Figure
                            key={`grid-${index}`}
                            image = {image}
                            position = {position}
                            name = {name}
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