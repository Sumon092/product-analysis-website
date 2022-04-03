import React, { useEffect, useState } from 'react';
import Image from '../Image/Image';
import './Home.css';
const Home = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div>
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
            <div className='client-reviews-container'>
                <h1>Client Review</h1>

            </div>
        </div>
    );
};

export default Home;