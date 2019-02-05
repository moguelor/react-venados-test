import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const Tab = ({ text, isActive, handleClick }) => {
    return (
        <div
            className={`col-6 ${css(styles.tab, isActive ? styles.active : styles.inactive)}`}
            onClick={handleClick}
        >
            {text}
        </div>
    );
}

const styles = {
    tab: css({
        padding: 12,
        fontSize: 15,
        cursor: 'pointer',
    }),
    active: css({
        backgroundColor: "#fac000",
    }),
    inactive: css({
        backgroundColor: "#fac000",
        border: "1px solid #fac000",
        opacity: ".7"
    })
}

Tab.propTypes = {
    /** Texto del tab */
    text: PropTypes.string,

    /** Bandera que indica si el tab se encuentra activo o no. */
    isActive: PropTypes.bool,

    /** Evento al hacer click en las tabs. */
    handleClick: PropTypes.func
}

export default Tab;