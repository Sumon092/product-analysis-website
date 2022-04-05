import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Image from '../Image/Image';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [images, setImages] = useState([]);
    const [reviews] = useReview();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div className='home-compo'>
            <div className='home-page'>
                <div>
                    <h1 ><span className='heading'>Explore The World !!</span>  <br />Explore Yourself</h1>
                    <p>
                        Sony brings to you a wonderful camera that world just loving it.People are loving its lens and also gadget with it.It can be your partner where ever you go.Lets explore with SONY.
                    </p>
                    <button className='detail-button'>Show Details</button>
                </div>
                <div className='home-image-container'>
                    {
                        images.map(image => <Image key={image.id} image={image}></Image>)
                    }
                </div>
            </div>

            <h1 className='review-heading'>Client Review {reviews.slice(0, 3).length}</h1>
            <div className="review-section">
                <div className='client-reviews-container'>

                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }

                </div>

                <Link to='/reviews'><button className='detail-button' >Show All Reviews</button></Link>
            </div>

        </div>
    );
};

export default Home;