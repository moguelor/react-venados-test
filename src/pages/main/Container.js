import React, { Component } from 'react';
import { SideBar } from './components';

class Container extends Component {
    render(){
        return (
            <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <SideBar />
                <div className="col-12 col-md-9" style={{ backgroundColor: "green" }}>
                    Elements
                </div>
            </div>
          </div>
        );
    };
};

export default Container;