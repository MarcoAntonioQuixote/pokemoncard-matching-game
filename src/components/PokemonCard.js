import React, { useEffect } from 'react'

function PokemonCard({pokemon, faceUp, setFaceUp}) {

    const isFaceUp = faceUp.includes(pokemon.id);

    useEffect(() => {
        if (faceUp.length === 2) {
            setTimeout(() => {
                // use setPlayerTurn (1 => 2 => 1)
                setFaceUp([])
            },5000)
        }
    },[faceUp])

    const flipCard = () => {
        if (faceUp.length === 2) return;
        setFaceUp(prev => [...prev, pokemon.id])
    }

  return (
    <div onClick={flipCard} className={`card ${isFaceUp ? pokemon.type : ''}`}>
        {isFaceUp && <h4>{pokemon.name}</h4>}
        {isFaceUp && <img src={pokemon.image} alt="" />}
    </div>
  )
}

export default PokemonCard