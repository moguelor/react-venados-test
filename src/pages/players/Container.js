import React, {Component} from 'react';
import { Grid } from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import api from './api';
import actions from './actions';
import * as selectors from './selectors';
import {ModalPlayer} from './components';
import {Loading} from '../../common/components';

class Container extends Component{

    componentWillMount(){
        const {fetchPlayers} = this.props;
        fetchPlayers();
    }

    render(){

        const {players, player, isFetching, isOpenModal, closeModal, selectPlayer} = this.props;

        return (
            <div>
                <ModalPlayer 
                    isOpen = {isOpenModal}
                    handleClickClose = {closeModal}
                    player = {player}
                />
                <div>
                    Icono
                </div>
                {
                    isFetching 
                        ? <Loading />
                        : <Grid 
                            data = {players}
                            handleClickPlayer={selectPlayer}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching : selectors.getIsFetching,
    players : selectors.getData,
    player: selectors.getPlayer,
    isOpenModal : selectors.getIsOpenModal
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: () => dispatch(api.fetchPlayers()),
        closeModal: () => dispatch(actions.closeModal()),
        selectPlayer: (player) => dispatch(actions.selectPlayer(player))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
