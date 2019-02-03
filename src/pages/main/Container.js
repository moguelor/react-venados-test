import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NotFound} from './components';
import home from '../home';
import statistics from '../statistics';
import players from '../players';

class Container extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="container-fluid">
                    <Switch>
                        <Route exact path="/" component={home.Container} />
                        <Route exact path="/statistics" component={statistics.Container} />
                        <Route exact path="/players" component={players.Container} />
                        <Route component={NotFound} />
                    </Switch>
                    </div>
                </div>
            </Router>
        );
    };
};

export default Container;