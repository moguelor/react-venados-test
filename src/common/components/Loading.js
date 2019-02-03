import React from 'react';
import { css } from 'glamor';

const Loading = () => {
    return (
        <div className="text-center">
            <span className={`fa fa-circle-o-notch fa-spin ${styles.loading}`} />
            <br />
            Cargando partidos...
            </div>
    );
}

const styles = {
    loading: css({
        fontSize: 50,
        marginTop: 30,
        marginBottom : 10,
        color: "#2d7700"
    })
};

export default Loading;