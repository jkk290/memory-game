import { Card } from "./Card"

export function CardGrid() {
    const cardNames = ["Y'shtola Night's Blessed", 
        "Lightning, Army of One",
        "Tifa, Martial Artist",
        "Yuna, Grand Summoner",
        "Celes, Rune Knight",
        "Cloud, Ex-SOLDIER",
        "Sephiroth, Fallen Hero",
        "Squall, SeeD Mercenary",
        "Tidus, Yuna's Guardian",
    ]

    return (
        <div className='card-grid'>
            {cardNames.map(name => {
                return <Card key={name} name={name} />
            })}
        </div>
    )

    
}