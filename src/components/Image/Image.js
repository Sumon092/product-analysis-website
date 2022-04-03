import React from 'react';
import './Image.css'

const Image = (props) => {
    const { img } = props.image;
    return (
        <div className='home-image'>
            <img src={img} alt="" />
        </div>
    );
};

export default Image;