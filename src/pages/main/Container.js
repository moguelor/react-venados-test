import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from '../home';

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
                    <div>
                        SideBar
                    </div>
                    <div>
                        <Route exact path="/" component={home.Container} />
                        <Route path="/statics" component={Statics} />
                        <Route path="/players" component={Players} />
                    </div>
                </div>
            </Router>
        );
    };
};

export default Container;