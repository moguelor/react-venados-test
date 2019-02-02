import React from 'react';
import {css} from 'glamor';
import PropTypes from 'prop-types';

const Tab = ({text, isActive}) => {
    return (
        <div className={`col ${css(styles.tab, isActive ? styles.active : styles.inactive)}`}>
            {text}
        </div>
    );
}

const styles = {
    tab: css({
        padding : 12,
        fontSize: 12,
        cursor: 'pointer'
    }),
    active: css({
        backgroundColor: "#257700",
        boxShadow: "0px 2px 3px rgba(0, 0, 0, .3)",
        color: "#fff"
    }),
    inactive: css({
        border : "1px solid #a3a5a9"
    })
}

Tab.propTypes = {
    /** Texto del tab*/
    text : PropTypes.string,

    /** Bandera que indica si el tab se encuentra activo o no. */
    isActive : PropTypes.bool
}

export default Tab;