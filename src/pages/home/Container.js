import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Tab, Logo, MatchList } from './components';
import { IMG_URL_VENADOS } from './constants';
import * as selectors from './selectors';
import api from './api';
import actions from './actions';


class Container extends Component {

    componentWillMount() {
        const { fetchGames } = this.props;
        fetchGames();
    }

    render() {

        const {
            selectTabAscent,
            selectTabCoup,
            isActiveCoupTab,
            isActiveAscentTab,
            dataCoupMx,
            dataAscentMX,
            isFetching
        } = this.props;

        return (
            <div>
                <div className="row">
                    <Logo srcImage={IMG_URL_VENADOS} />
                </div>
                <div className="row text-center">
                    <Tab
                        text="COPA MX"
                        isActive={isActiveCoupTab}
                        handleClick={selectTabCoup}
                    />
                    <Tab
                        text="ASCENSO MX"
                        isActive={isActiveAscentTab}
                        handleClick={selectTabAscent}
                    />
                </div>

                {
                    isActiveCoupTab
                        ? <MatchList
                            items={dataCoupMx}
                            showLoading={isFetching}

                        />
                        : <MatchList
                            items={dataAscentMX}
                            showLoading={isFetching}
                        />
                }
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    isActiveCoupTab: selectors.getIsActiveCoupTab,
    isActiveAscentTab: selectors.getIsActiveAscentTab,
    dataCoupMx: selectors.getDataCoupMX,
    dataAscentMX: selectors.getDataAscentMX,
    isFetching: selectors.getIsFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectTabAscent: () => dispatch(actions.selectTabAscent()),
        selectTabCoup: () => dispatch(actions.selectTabCoup()),
        fetchGames: () => dispatch(api.fetchGames())
    };
};

Container.propTypes = {
    /** Funcion para seleccionar el tab para partidos de ascenso. */
    selectTabAscent: PropTypes.func,

    /** Funcion para seleccionar el tab para partidos de copa */
    selectTabCoup: PropTypes.func,

    /** Bandera para saber si el tab esta activo. */
    isActiveCoupTab: PropTypes.bool,

    /** Bandera para saber si el tab esta activo. */
    isActiveAscentTab: PropTypes.bool,

    /** Información de la copa mx */
    dataCoupMx: PropTypes.array,

    /** Infrmación de la liga acendente */
    dataAscentMX: PropTypes.array,

    /** Bandera para saber el momento de consumo del servicio. */
    isFetching: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);