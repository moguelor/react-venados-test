import React, { Component } from 'react';

class Container extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    };
};

export default Container;