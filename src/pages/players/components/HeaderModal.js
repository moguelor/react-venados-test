import React from 'react';
import {css} from 'glamor';

const HeaderModal = ({ image, fullName, position }) => {
    return (
        <div className={`row align-items-center text-center ${styles.headerBlock}`}>
            <div className={`col-12`}>
                <div className={`${styles.label}`}>FICHA TÉCNICA</div>
            </div>
            <div className={`col-12`}>
                <div className={styles.figure}>
                    <img alt="" src={image} className={`${styles.image}`} />
                </div>
                <div className={styles.name}>{fullName}</div>
                <div className={styles.position}>{position}</div>
            </div>
        </div>
    );
};

const styles = {
    headerBlock: css({
        backgroundColor: "#2d7700",
        padding: "35px 0px 25px 0px",
        color: "#fff"
    }),
    label: css({
        fontSize: 25,
        marginBottom : 15
    }),
    name: css({
        margin: "-10px 0px 15px",
        fontSize: 15
    }),
    position: css({
        margin: "10px 0px 15px",
        fontSize: 15
    }),
    figure: css({
        width: 128,
        height: 128,
        borderRadius: "100%",
        overflow: "hidden",
        margin: "0 auto 16px",
    }),
    image: css({
        maxWidth: "100%",
        height: "auto"
    })
};

export default HeaderModal;