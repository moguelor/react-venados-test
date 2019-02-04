import React from 'react';
import { css } from 'glamor';

const LinkItem = ({ label, to, onClick, isSelected }) => {
    return (
            <div className={`d-flex align-items-center ${css(styles.item, !isSelected || styles.selected)}`} onClick={onClick}>
                <div className={`${css(styles.circle, !isSelected || styles.circleActive)}`} />
                <div className={`${css(styles.label, !isSelected || styles.labelActive)}`}>{label}</div>
            </div>
    );
}

const styles = {
    item: css({
        padding: "15px 10px 15px 10px",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#e8e8e8"
        }
    }),
    label: css({
        fontSize: 15,
        fontWeight: 600,
        display: "inline-block"
    }),
    labelActive: css({
        color: "#4189f0"
    }),
    selected: css({
        backgroundColor: "#e8e8e8"
    }),
    circle: css({
        width: 20,
        height: 20,
        backgroundColor: "#999",
        display: "inline-block",
        marginRight: 30,
        borderRadius: 20,
        verticalAlign: 'center'
    }),
    circleActive: css({
        backgroundColor: "#4189f0"
    })
};

export default LinkItem;