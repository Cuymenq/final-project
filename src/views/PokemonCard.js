import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../contexts/DataProvider';

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
            {
                (pokemonCardState === "LOADED") ?
                    (
                        <div className="container my-3 pokemonCard">
                            <div>{pokemonCard.data.map((card, images, set) =>
                                <div>                                    
                                    <h2>{card.name}</h2>
                                    <h3>From {card.set.name}</h3>
                                    <img src={card.images.small} alt="card" />
                                </div>)}
                            </div>
                        </div>
                    ) :
                    ""
            }
        </div >
    )
}