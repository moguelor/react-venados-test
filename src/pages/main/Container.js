import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import actions from './actions';
import * as selectors from './selectors';
import { Router, Route, Switch, withRouter } from "react-router-dom";
import {NotFound, HeaderBar, SideBar} from './components';
import home from '../home';
import statistics from '../statistics';
import players from '../players';

class Container extends Component {
    render() {

        const {redirect, isOpenSidebar, hideSidebar, showSidebar, location, history} = this.props;
        return (
            <Router history={history}>
                    <div className="container">
                    <HeaderBar 
                        handleClick = {showSidebar}
                        text= {location == '/players' ? 'Jugadores' : ''}
                    />
                    <SideBar 
                        isOpen={isOpenSidebar} 
                        handleClickClose = {hideSidebar}
                        redirect = {redirect}
                        location = {location}
                    />
                    <Switch >
                        <Route exact path="/" component={home.Container} />
                        <Route exact path="/home" component={home.Container} />
                        <Route exact path="/statistics" component={statistics.Container} />
                        <Route exact path="/players" component={players.Container} />
                        <Route component={NotFound} />
                    </Switch>
                    </div>
            </Router>
        );
    };
};

const mapStateToProps = createStructuredSelector({
    isOpenSidebar : selectors.getIsOpen,
    location : (state) => state.router.location.pathname 
});

const mapDispatchToProps = (dispatch) => {
    return {
        hideSidebar: () => dispatch(actions.hideSidebar()),
        showSidebar: () => dispatch(actions.showSidebar()),
        redirect: (url) => dispatch(actions.redirect(url))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));


