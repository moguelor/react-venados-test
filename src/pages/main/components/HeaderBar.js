import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const HeaderBar = ({ handleClick, text }) => {
    return (
        <div className={`row align-items-center ${styles.container}`}>
            <div
                className={`col-1`}
                onClick={handleClick}>
                <span className={`fa fa-bars ${styles.icon}`} />
            </div>
            <div className={`col ${styles.title}`}>{text}</div>
        </div>
    );
}

HeaderBar.propTypes = {
    /** Evento click del elemento. */
    handleClick: PropTypes.func,

    /** Texto a mostrar. */
    text: PropTypes.string
};

const styles = {
    icon: css({
        fontSize: 30,
        padding: "10px 0px 10px 0px",
        color: "#888",
        cursor: "pointer"
    }),
    title: css({
        fontSize: 25,
        marginLeft: 20
    }),
    container: css({
        backgroundColor: "#fff"
    })
}


export default HeaderBar;