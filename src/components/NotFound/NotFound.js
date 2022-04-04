import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>This page is not available</h2>
            <p>Error : <small>404</small></p>
        </div>
    );
};

export default NotFound;