import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CardTable from './components/CardTable.js';
import Scoreboard from './components/Scoreboard.js';

function App() {

    const [cards, setCards] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(1);

    useEffect(() => {
        let url = 'https://pokeapi.co/api/v2/pokemon/';

        let getPokeInfo = async () => {
            let myCards = [];

            let ids = [25,59,151,149,9,6,94,143];

            for (let id of ids) {
                let res = await axios.get(`${url}/${id}`);
                
                let type = res.data.types[0].type.name;
                let image = res.data.sprites.front_default;
                let name = res.data.name;
                
                for (let x = 0; x < 2; x++) {
                    let id = `${res.data.name}${x}`;
                    let thisPoke = {type,image,name,id};
                    myCards.push(thisPoke);
                }
            }

            for (let i = myCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [myCards[i], myCards[j]] = [myCards[j], myCards[i]];
            }

            setCards(myCards);
        }

        // getPokeInfo()

    }, [])

  return (
    <div className="App-header">
        <Scoreboard playerTurn={playerTurn}/>
        Pokemon Card Game 🃏
        <CardTable cards={cards}/>
    </div>
  );
}

export default App;
