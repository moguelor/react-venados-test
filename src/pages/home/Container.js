import React, { Component } from 'react';
import {Tab, Logo} from './components';

class Container extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        icono
                    </div>
                </div>
                <div className="row">
                    <Logo srcImage="https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png"/>
                </div>
                <div className="row text-center">
                        <Tab 
                            text = "COPA MX"
                            isActive = {false}                    
                        />
                        <Tab 
                            text = "ASCENSO MX"
                            isActive = {true}
                        />
                </div>
            </div>
        );
    }
};

export default Container;