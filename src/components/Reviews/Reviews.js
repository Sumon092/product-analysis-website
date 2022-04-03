import React from 'react';
import useReview from '../../hooks/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    console.log(reviews);
    return (
        <div>
            <h2>This is reviews</h2>
        </div>
    );
};

export default Reviews;