import { Card } from "./Card"

export function CardGrid({ cardsArray, handleClick }) {

    return (
        <div className='card-grid'>
            {cardsArray.map(card => {
                return <Card key={card.id} id={card.id} name={card.name} clicked={card.clicked} handleClick={handleClick}/>
            })}
        </div>
    )

    
}