import { useState } from 'react'
import { Card } from "./Card"

export function CardGrid({ updateScore }) {
    const [cardsArray, setCardsArray] = useState([
    {id: 1, name: "Y'shtola Night's Blessed", clicked: false}, 
    {id: 2, name: "Lightning, Army of One", clicked: false},
    {id: 3, name: "Tifa, Martial Artist", clicked: false},
    {id: 4, name: "Yuna, Grand Summoner", clicked: false},
    {id: 5, name: "Celes, Rune Knight", clicked: false},
    {id: 6, name: "Cloud, Ex-SOLDIER", clicked: false},
    {id: 7, name: "Sephiroth, Fallen Hero", clicked: false},
    {id: 8, name: "Squall, SeeD Mercenary", clicked: false},
    {id: 9, name: "Tidus, Yuna's Guardian", clicked: false}
  ])

    function handleClick(id) {      
        if (checkValidSelection(id)) {
            updateScore();
            setCardsArray(prevCards => {
                return prevCards.map(card => 
                card.id === id ? {...card, clicked: !card.clicked } : card
                );
            })
            shuffleArray();

        }
        
    }

    function checkValidSelection(id) {
        let index = cardsArray.findIndex(card => card.id === id);
        if (!cardsArray[index].clicked) {
            return true;
        } else {
            return false;
        }

    }

    function shuffleArray() {
        const shuffledArray = [...cardsArray];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setCardsArray(shuffledArray);
    }

    return (
        <div className='card-grid'>
            {cardsArray.map(card => {
                return <Card key={card.id} id={card.id} name={card.name} clicked={card.clicked} handleClick={handleClick}/>
            })}
        </div>
    )

    
}