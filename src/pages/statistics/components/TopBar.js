import React from 'react';
import {css} from 'glamor';

const TopBar = () => {
    return (
        <div className={`${styles.container} row text-center`}>
            <div className="col-6 text-left">
                Tabla general
            </div>
            <div className="col-2">
                JJ
            </div>
            <div className="col-2">
                DG
            </div>
            <div className="col-2">
                PTS
            </div>
        </div>
    );
}

const styles = {
    container : css({
        backgroundColor: "#7f7f7f",
        color : "#fff",
        padding : 5,
        fontSize: 14
    })
};

export default TopBar;