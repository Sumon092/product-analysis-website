import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, description } = props.review;
    return (
        <div className='review-cart'>
            <div className="reviewer-info">
                <div className='reviewer-image'>
                    <img src={img} alt="" />
                </div>
                <div className="reviewer-name">
                    <h2>{name}</h2>
                </div>
            </div>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Review;