import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const RowInformation = ({ title, value }) => {
    return (
        <div className={`col-12`}>
            <div className={styles.title}>{title}</div>
            <span className={styles.value}>{value}</span>
        </div>
    );
}

const styles = {
    title: css({
        fontSize: 15,
        fontWeight: 600
    }),
    value: css({
        fontSize: 12
    })
};

RowInformation.propTypes = {
    /** Etiqueta */
    title: PropTypes.string,
    /** Valor */
    value: PropTypes.string
}

export default RowInformation;