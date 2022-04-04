import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = useReview();
    console.log(reviews);



    return (
        <div className='reviewer-container'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;