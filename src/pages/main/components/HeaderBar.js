import React from 'react';
import {css} from 'glamor';

const HeaderBar = ({handleClick}) => {
    return (
        <div className="row">
            <div className="col-12">
                <span className={`fa fa-bars ${styles.icon}`} onClick={handleClick}/>
            </div>
        </div>
    );
}

const styles = {
    icon : css({
        fontSize: 30,
        padding : "10px 0px 10px 0px",
        color: "#888",
        cursor: "pointer"
    })
}


export default HeaderBar;