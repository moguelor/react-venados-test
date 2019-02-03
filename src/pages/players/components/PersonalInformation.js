import React from 'react';
import { css } from 'glamor';
import moment from 'moment';
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

export default PersonalInformation;