import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TopBar, Statistics } from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Loading } from '../../common/components';
import api from './api';
import * as selectors from './selectors';

export class Container extends Component {

    componentWillMount() {
        const { fetchStatistics } = this.props;
        fetchStatistics();
    }

    render() {

        const { data, isFetching } = this.props;

        return (
            <div>
                <TopBar />
                {
                    isFetching
                        ? <Loading />
                        : <Statistics
                            data={data}
                        />
                }

            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectors.getIsFetching,
    data: selectors.getData
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatistics: () => dispatch(api.fetchStatistics())
    };
};

Container.propTypes = {
    /** Funcion para consumir todas las estadisticas. */
    fetchStatistics: PropTypes.func,
    /** Estadisticas */
    data: PropTypes.array,
    /** Bandera para saber si ya termino de cargar el servicio o no. */
    isFetching: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);