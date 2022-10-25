import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import slide1 from '../assets/randomcard.jpeg'
import slide2 from '../assets/boosters.jpg'
import slide3 from '../assets/accessories.jpg'
import slide4 from '../assets/trainerbox.jpg'
import slide5 from '../assets/oversizedcards.jpg'
import { Link } from 'react-router-dom'
import PokemonCard from '../views/PokemonCard'


const Banner = () => {
    function GetCurrentUser() {
        const [user, setUser] = useState('')

    }
    return (
        <Carousel fade className='container'>
            <Carousel.Item >
                <Link to="/ptcg">
                    <img onClick={PokemonCard}
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item >
                <Link to='/boosterpacks'>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/accessories'>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt='slide 3'
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/elitetb'>
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="fourth slide"
                    />
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to='/oversized'>
                <img
                    className="d-block w-100"
                    src={slide5}
                    alt="fifth slide"
                />
                </Link>
            </Carousel.Item>
        </Carousel>
    );
}



export default Banner