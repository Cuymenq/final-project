import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import slide1 from '../assets/randomcards.jpeg'
import slide2 from '../assets/boosters.jpg'
import slide3 from '../assets/accessories.jpg'
import slide4 from '../assets/trainerbox.jpg'
import slide5 from '../assets/oversizedcards.jpg'


const Banner = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState('')

    }
    return (
        <Carousel fade className='container'>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt='slide 3'
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide4}
                    alt="fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide5}
                    alt="fifth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}



export default Banner