import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import RowInformation from './RowInformation';

const PersonalInformation = ({ birthday, birth_place, weight, height, number, last_team }) => {
    return (
        <div className={`row align-items-center text-center ${styles.informationBlock}`}>
            <RowInformation
                title='FECHA DE NACIMIENTO'
                value={birthday}
            />
            <RowInformation
                title='LUGAR DE NACIMIENTO'
                value={birth_place}
            />
            <RowInformation
                title='PESO'
                value={`${weight} KG`}
            />
            <RowInformation
                title='ALTURA'
                value={`${height} M`}
            />
            <RowInformation
                title='NUMERO'
                value={number}
            />
            <RowInformation
                title='EQUIPO ANTERIOR'
                value={last_team}
            />
        </div>
    );
}

const styles = {
    informationBlock: css({
        backgroundColor: "#fff",
        minHeight: 300
    })
};

PersonalInformation.propTypes = {
    /** Nacimiento */
    birthday: PropTypes.string,
    /** Lugar de nacimiento */
    birth_place: PropTypes.string,
    /** Peso */
    weight: PropTypes.number,
    /** Altura */
    height: PropTypes.number,
    /** Número de playera */
    number: PropTypes.number,
    /** Último equipo */
    last_team: PropTypes.string
};

export default PersonalInformation;