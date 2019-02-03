import React, {Component} from 'react';
import { Grid } from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import api from './api';
import * as selectors from './selectors';
import {Loading} from '../../common/components';

class Container extends Component{

    componentWillMount(){
        const {fetchPlayers} = this.props;
        fetchPlayers();
    }

    render(){

        const {data, isFetching} = this.props;

        return (
            <div>
                <div>
                    Icono
                </div>
                {
                    isFetching 
                        ? <Loading />
                        : <Grid 
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
        fetchPlayers: () => dispatch(api.fetchPlayers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
