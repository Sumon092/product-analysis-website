import React from 'react';
import './Review.css'

const Review = (props) => {
    // const { reviews, reviewHandler } = props;
    const { name, img, description, rating } = props.review;
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
            <p className='rating'><small>Rating: {rating}</small></p>
        </div>
    );
};

export default Review;