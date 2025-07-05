import { useState } from 'react'
import { Card } from "./Card"

export function CardGrid() {
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
        setCardsArray(prevCards => {
            return prevCards.map(card => 
                card.id === id ? {...card, clicked: !card.clicked } : card
            );
        })
    }

    return (
        <div className='card-grid'>
            {cardsArray.map(card => {
                return <Card key={card.id} id={card.id} name={card.name} clicked={card.clicked} handleClick={handleClick}/>
            })}
        </div>
    )

    
}