import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
    return <div>Home</div>
};
const Statics = () => {
    return <div>Estadisticas</div>
};
const Players = () => {
    return <div>Jugadores</div>
};

class Container extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/statics" component={Statics} />
                    <Route path="/players" component={Players} />
                </div>
            </Router>
        );
    };
};

export default Container;