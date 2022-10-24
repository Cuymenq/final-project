import { useState, useContext, createContext } from 'react'
import { getFirestore} from '@firebase/firestore'
import { AuthContext } from './AuthProvider'


export const DataContext = createContext()

export const DataProvider = function(props) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()

    const getPokemonCard = async function(pokemonCardName, callback) {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonCardName}`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }

    const value = {
        getPokemonCard: getPokemonCard,
    }


    
    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}