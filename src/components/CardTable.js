import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard.js'

function CardTable({cards}) {

    const [faceUp, setFaceUp] = useState([]);

    useEffect(() => {
        console.log(faceUp);
    }, [faceUp])

    const showPokemonCards = cards.map(pokemon => {
        return (
            <PokemonCard 
                pokemon={pokemon} 
                key={pokemon.id} 
                faceUp={faceUp}
                setFaceUp={setFaceUp}
            />
        )
    })

  return (
    <div className='table'>
        {showPokemonCards}
    </div>
  )
}

export default CardTable