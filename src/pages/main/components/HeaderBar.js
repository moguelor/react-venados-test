import React from 'react';
import {css} from 'glamor';

const HeaderBar = ({handleClick, text}) => {
    return (
        <div className="row align-items-center">
                <div className={`col-1`} onClick={handleClick}><span className={`fa fa-bars ${styles.icon}`} /> </div>
                <div className={`col ${styles.title}`}>{text}</div>
        </div>
    );
}

const styles = {
    icon : css({
        fontSize: 30,
        padding : "10px 0px 10px 0px",
        color: "#888",
        cursor: "pointer"
    }),
    title : css({
        fontSize: 25,
        marginLeft: 20
    })
}


export default HeaderBar;