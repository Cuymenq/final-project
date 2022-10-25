import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'


export default function PokemonCardList() {
    const [pokemonCard, setPokemonCard] = useState({})
    const [pokemonCardState, setPokemonCardState] = useState("LOADING")
    const [pokemonCardName, setPokemonCardName] = useState('Bulbasaur')
    const { getPokemonCard } = useContext(DataContext)

    useEffect(() => {
        getPokemonCard(pokemonCardName, function (data) {
            setPokemonCard(data)
            setPokemonCardState("LOADED")
        })
        console.log('FETCHING')
    }, [pokemonCardName])


    return (
        <div className='container my- 3 text-center'>
            <h1>Pokemon Trading Card Game</h1>
            <h2>Cards</h2>
            <div>
                <Form className="d-flex mx-4">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            <div className='mx-auto'>
                {
                    (pokemonCardState === "LOADED") ?
                        (
                            <div>{pokemonCard.data.map((card, images, set) =>

                                <Row className='justify-content-center my-4 border-0'>

                                    <Card style={{ width: '400px' }} className='border-0'>
                                        <Card.Img variant="top" src={card.images.small} alt="card" />
                                        <Card.Body>
                                            <Card.Title><h2><strong>{card.name}</strong></h2></Card.Title>
                                            <Card.Text>
                                                <h4>From {card.set.name}</h4>
                                                <p>{card.flavorText}</p>
                                            </Card.Text>
                                            <Button variant="primary">Check it out</Button>
                                        </Card.Body>
                                    </Card>

                                </Row>)}

                            </div>
                        ) :
                        ""
                }
            </div>
        </div >
    )
}