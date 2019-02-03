import React from 'react';
import {css} from 'glamor';

const HeaderBar = () => {
    return (
        <div className="row">
            <div className="col-12">
                <span className={`fa fa-bars ${styles.icon}`} />
            </div>
        </div>
    );
}

const styles = {
    icon : css({
        fontSize: 30,
        padding : "10px 0px 10px 0px",
        color: "#888888"
    })
}


export default HeaderBar;