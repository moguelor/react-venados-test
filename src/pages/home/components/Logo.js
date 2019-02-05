import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const Logo = ({ srcImage }) => {
    return (
        <div className={`col text-center ${styles.containerImage}`}>
            <img 
                alt="logo" 
                className={styles.logo} 
                src={srcImage} 
            />
        </div>
    );
}

const styles = {
    containerImage: css({
        padding: "0px 15px 15px 15px",
        backgroundColor: "#fff"
    }),
    logo: css({
        width: 175,
        '@media(min-width: 768px)': {
            width: 225,
        }
    })
}

Logo.propTypes = {
    /** Url de la imagen a mostrar */
    srcImage: PropTypes.string
}

export default Logo;