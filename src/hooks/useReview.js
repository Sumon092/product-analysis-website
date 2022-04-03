import { useEffect, useState } from 'react';

const useReview = (name) => {
    const [reviews, setReviews] = useState([]);
    console.log(name + 'review is coming')

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        [reviews, setReviews]
    );
};

export default useReview;