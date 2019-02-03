import React from 'react';
import { css } from 'glamor';

const Figure = ({image, position, name}) => {
    return (
        <div className={`col-6 col-sm-4 text-center ${styles.item}`}>
            <div className={styles.figure}>
                <img alt="" src={image} className={`${styles.image} rounded-circle`} />
            </div>
            <div className={styles.text}>{position}</div>
            <div className={styles.text}>{name}</div>
        </div>
    );
}

const styles = {
    item: css({
        marginTop: 20,

    }),
    figure: css({
        width: 128,
        height: 128,
        borderRadius: "100%",
        overflow: "hidden",
        margin: "0 auto 16px"
    }),
    image: css({
        maxWidth: "100%",
        height: "auto"
    }),
    text: css({
        fontSize: 15
    })
}

export default Figure;