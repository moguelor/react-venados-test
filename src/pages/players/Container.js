import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ModalPlayer } from './components';
import { Loading } from '../../common/components';
import api from './api';
import actions from './actions';
import * as selectors from './selectors';

class Container extends Component {

    componentWillMount() {
        const { fetchPlayers } = this.props;
        fetchPlayers();
    }

    render() {

        const {
            players,
            player,
            isFetching,
            isOpenModal,
            closeModal,
            selectPlayer
        } = this.props;

        return (
            <div>
                <ModalPlayer
                    isOpen={isOpenModal}
                    handleClickClose={closeModal}
                    player={player}
                />
                {
                    isFetching
                        ? <Loading />
                        : <Grid
                            data={players}
                            handleClickPlayer={selectPlayer}
                        />
                }
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectors.getIsFetching,
    players: selectors.getData,
    player: selectors.getPlayer,
    isOpenModal: selectors.getIsOpenModal
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: () => dispatch(api.fetchPlayers()),
        closeModal: () => dispatch(actions.closeModal()),
        selectPlayer: (player) => dispatch(actions.selectPlayer(player))
    };
};

Container.propTypes = {
    /** Funcion para seleccionar al jugador. */
    selectPlayer: PropTypes.func,
    /** Función para cerrar el modal. */
    closeModal: PropTypes.func,
    /** Todos los jugadores. */
    players: PropTypes.array,
    /** El jugador seleccionado. */
    player: PropTypes.object,
    /** Bandera para indicarque se esta realizando la petición. */
    isFetching: PropTypes.bool,
    /** Bandera para indicar si el modal esta abierto o cerrado. */
    isOpenModal: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
