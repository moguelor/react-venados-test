import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import HeaderModal from './HeaderModal';
import PersonalInformation from './PersonalInformation';

const customStyleModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        overflow: 'scroll'
    },
    content: {
        padding: 0,
        background: 'none',
        border: 'none',
        bottom: 'auto',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        maxWidth: '350px',
        transform: 'translate(-50%, 0%)',
    }
};

const ModalPlayer = ({ isOpen, handleClickClose, player }) => {

    const { image, name, position, first_surname, second_surname, birthday, weight, height, birth_place, number, last_team } = player;

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClickClose}
                style={customStyleModal}
            >
                <HeaderModal
                    image={image}
                    fullName={`${name} ${first_surname} ${second_surname}`}
                    position={position}
                />

                <PersonalInformation
                    birthday={moment(birthday).format('DD/MM/Y')}
                    weight={weight}
                    height={height}
                    birth_place={birth_place}
                    number={number}
                    last_team={last_team}
                />
            </Modal>
        </div>
    );
};

export default ModalPlayer;