import React from 'react';
import errorImg from './error.jpg';

import './error.sass';

const Error = () => {
    return (
        <div className = "error-block">
            <span>Server Error. We work on it, comeback soon...</span>
            <img src = {errorImg} alt = "Error"/>
        </div>
    )
}

export default Error;
