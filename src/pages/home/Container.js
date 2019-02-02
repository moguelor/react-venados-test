import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import actions from './actions';
import { connect } from 'react-redux';
import {Tab, Logo, MatchList} from './components';
import {IMG_URL_VENADOS} from './constants';
import * as selectors from './selectors';

class Container extends Component {
    render () {

        const {
            selectTabAscent,
            selectTabCoup,
            isActiveCoupTab,
            isActiveAscentTab
        } = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col">
                        icono
                    </div>
                </div>
                <div className="row">
                    <Logo srcImage={IMG_URL_VENADOS}/>
                </div>
                <div className="row text-center">
                        <Tab 
                            text = "COPA MX"
                            isActive = {isActiveCoupTab} 
                            handleClick = {selectTabCoup}                   
                        />
                        <Tab 
                            text = "ASCENSO MX"
                            isActive = {isActiveAscentTab}
                            handleClick = {selectTabAscent}
                        />
                </div>
                        {
                            isActiveCoupTab 
                            ? <MatchList 
                                items = {[
                                    {
                                        group: 'ENERO',
                                        games : [
                                            {
                                                dayNumber: "16",
                                                dayName: 'SAB',
                                                localImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10962/10962.png',
                                                localName: 'Venados F.C.',
                                                opponentImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png',
                                                opponent: "TM Fútbol Club",
                                                homeScore: 2,
                                                awayScore: 2

                                            },
                                            {
                                                local: false,
                                                dayNumber: "16",
                                                dayName: 'SAB',
                                                opponent: "TM Fútbol Club",
                                                opponentImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10962/10962.png',
                                                localName: 'Venados F.C.',
                                                localImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png',
                                                homeScore: 2,
                                                awayScore: 2
                                            }
                                        ]

                                    },
                                    {
                                        group: 'FEBRERO',
                                        games : [
                                            {
                                                local: false,
                                                dayNumber: "16",
                                                dayName: 'SAB',
                                                opponent: "TM Fútbol Club",
                                                localName: 'Venados F.C.',
                                                localImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10962/10962.png',
                                                opponentImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png',
                                                homeScore: 2,
                                                awayScore: 2

                                            },
                                            {
                                                local: false,
                                                dayNumber: "16",
                                                dayName: 'SAB',
                                                opponent: "TM Fútbol Club",
                                                localName: 'Venados F.C.',
                                                opponentImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10962/10962.png',
                                                localImage: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png',
                                                homeScore: 2,
                                                awayScore: 2
                                            }
                                        ]

                                    },

                                ]}
                            /> 
                            : 'Ascenso'
                        }


            </div>
        );
    }
};

Container.propTypes = {
    /** Funcion para seleccionar el tab para partidos de ascenso. */
    selectTabAscent : PropTypes.func,

    /** Funcion para seleccionar el tab para partidos de copa */
    selectTabCoup: PropTypes.func,

    /** Bandera para saber si el tab esta activo. */
    isActiveCoupTab: PropTypes.bool,

    /** Bandera para saber si el tab esta activo. */
    isActiveAscentTab: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
    isActiveCoupTab : selectors.getIsActiveCoupTab,
    isActiveAscentTab : selectors.getIsActiveAscentTab
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectTabAscent : () => dispatch(actions.selectTabAscent()),
        selectTabCoup : () => dispatch(actions.selectTabCoup())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);