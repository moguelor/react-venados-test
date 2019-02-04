import React from 'react';
import { css } from 'glamor';

const Figure = ({image, position, name, handleClick}) => {
    return (
        <div className={`col-6 col-sm-4 col-md-3 col-lg-2 text-center ${styles.item}`} onClick={handleClick}>
            <div className={styles.figure}>
                <img alt="" src={image} className={`${styles.image}`} />
            </div>
            <div className={styles.text}>{position}</div>
            <div className={styles.text}>{name}</div>
        </div>
    );
}

const styles = {
    item: css({
        marginTop: 20,
        cursor : 'pointer'
    }),
    figure: css({
        width: 150,
        height: 150,
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