import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { NotFound, HeaderBar, SideBar } from './components';
import * as selectors from './selectors';
import actions from './actions';
import home from '../home';
import statistics from '../statistics';
import players from '../players';

class Container extends Component {
    render() {

        const {
            redirect,
            isOpenSidebar,
            hideSidebar,
            showSidebar,
            location,
            history
        } = this.props;

        return (
            <Router history={history}>
                <div className="container">
                    <HeaderBar
                        handleClick={showSidebar}
                        text={location === '/players' ? 'Jugadores' : ''}
                    />
                    <SideBar
                        isOpen={isOpenSidebar}
                        handleClickClose={hideSidebar}
                        redirect={redirect}
                        location={location}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={home.Container}
                        />
                        <Route
                            exact
                            path="/statistics"
                            component={statistics.Container}
                        />
                        <Route
                            exact
                            path="/players"
                            component={players.Container}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = createStructuredSelector({
    isOpenSidebar: selectors.getIsOpen,
    location: (state) => state.router.location.pathname
});

const mapDispatchToProps = (dispatch) => {
    return {
        hideSidebar: () => dispatch(actions.hideSidebar()),
        showSidebar: () => dispatch(actions.showSidebar()),
        redirect: (url) => dispatch(actions.redirect(url))
    };
};

Container.propTypes = {
    /** Redireccionar a una acción. */
    redirect: PropTypes.func,

    /** Función para ocultar el sidebar. */
    hideSidebar: PropTypes.func,

    /** Función para mostrar el sidebar. */
    showSidebar: PropTypes.func,

    /** Bandera para indicar si el sidebar esta abierto. */
    isOpenSidebar: PropTypes.bool,

    /** Ruta del navegador */
    location: PropTypes.string,

    /** Información de la historia del navegador. */
    history: PropTypes.object
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));


