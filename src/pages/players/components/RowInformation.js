import React from 'react';
import {css} from 'glamor';

const RowInformation = ({title, value}) => {
    return (
        <div className={`col-12`}>
            <div className={styles.title}>{title}</div>
            <span className={styles.value}>{value}</span>
        </div>
    );
}

const styles = {
    title: css({
        fontSize: 15
    }),
    value: css({
        fontSize: 12
    })
};

export default RowInformation;