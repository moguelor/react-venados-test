import React, { Component } from 'react';
import {TopBar, Statistics} from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as selectors from './selectors';
import {Loading} from '../../common/components';
import api from './api';

export class Container extends Component{

    componentWillMount(){
        const {fetchStatistics} = this.props;
        fetchStatistics();
    }

    render(){

        const {data, isFetching} = this.props;

        return (
            <div>
                <div>
                    Icono
                </div>
                <TopBar />
                {
                    isFetching 
                        ? <Loading /> 
                        :  <Statistics 
                                data = {data}
                            />
                }
               
            </div>  
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching : selectors.getIsFetching,
    data : selectors.getData
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatistics : () => dispatch(api.fetchStatistics())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);