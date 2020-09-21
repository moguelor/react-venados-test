import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Motion, spring, presets } from 'react-motion';
import { IMG_URL_VENADOS } from '../constants';

import LinkItem from './LinkItem';

const SideBar = ({ isOpen, handleClickClose, location, redirect }) => {
    return (
        <Motion
            defaultStyle={{ x: -450 }}
            style={{ x: spring(isOpen ? 0 : -450, presets.noWobble) }}
        >
            {
                ({ x }) =>
                    <div
                        className={`d-flex flex-column align-items-stretch ${styles.sidebar}`}
                        style={{ left: `${x}px` }}>
                        <div className={`d-flex align-items-center justify-content-center ${styles.logo} `}>
                            <img
                                alt=""
                                className={styles.image}
                                src={IMG_URL_VENADOS} />
                        </div>
                        <div className={`${styles.links} mb-auto`}>
                            <LinkItem
                                label="Inicio"
                                onClick={() => redirect('/react-venados-test')}
                                isSelected={location === '/react-venados-test'}
                            />
                            <LinkItem
                                label="Estadisticas"
                                onClick={() => redirect('/react-venados-test/statistics')}
                                isSelected={location === '/react-venados-test/statistics'}
                            />
                            <LinkItem
                                label="Jugadores"
                                onClick={() => redirect('/react-venados-test/players')}
                                isSelected={location === '/react-venados-test/players'}
                            />
                        </div>
                        <div
                            className={css(!isOpen || styles.overlay)}
                            onClick={handleClickClose}
                        />
                    </div>
            }
        </Motion>
    );
}

const styles = {
    sidebar: css({
        backgroundColor: '#fff',
        width: '280px',
        position: 'fixed',
        top: 0,
        height: "100%",
        zIndex: 999,
        display: 'block',
        '@media(min-width: 576px)': {
            width: '380px'
        }
    }),
    overlay: css({
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        top: 0,
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
    }),
    image: css({
        width: 150
    }),
    logo: css({
        backgroundColor: "#2d7700",
        height: "40%"
    }),
    links: css({
        backgroundColor: "#fff",
        height: "100%"
    })
}

SideBar.propTypes = {
    /** Funcion para redireccionar. */
    redirect: PropTypes.func,

    /** Evento click al cerrar el sidebar. */
    handleClickClose: PropTypes.func,

    /** Bandera para indicar si esta abierta o cerrada. */
    isOpen: PropTypes.bool,

    /** Ruta a redireccionar. */
    location: PropTypes.string,
}

export default SideBar;