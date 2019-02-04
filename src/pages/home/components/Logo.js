import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'glamor';

const Logo  = ({srcImage}) => {
    return (
        <div className={`col text-center ${styles.containerImage}`}>
            <img className={styles.logo} alt="logo" src={srcImage} />
        </div>
    );
}

const styles = {
    containerImage : css({
        padding : "0px 15px 15px 15px"
    }),
    logo : css({
        width : 125,
        height: 125
    })
}

Logo.propTypes = {
    /** Url de la imagen a mostrar */
    srcImage: PropTypes.string
}

export default Logo;