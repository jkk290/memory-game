import '../styles/Game.css'
import { useState, useEffect } from 'react'
import { CardGrid } from './CardGrid';


export function Game(){
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

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

    function updateScore() {
        setScore(prevScore => {
            const newScore = prevScore + 1;

            setBestScore(prevBestScore => {
            return Math.max(prevBestScore, newScore);
            });

            return newScore;
        });
    };

    function reset(){
        setScore(0);
        setGameOver(false);
        setCardsArray([
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
    }
    
    function handleClick(id) {    
        if (checkValidSelection(id)) {
            updateScore();
            setCardsArray(prevCards => {
                const updatedCards = prevCards.map(card => 
                card.id === id ? {...card, clicked: !card.clicked } : card
            );

            const shuffledArray = [...updatedCards];

            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;                
            });
        } else {
            setGameOver(true);
        }      
    }

    useEffect(() => {
        if (score === 9) {
            setGameOver(true);
        }
    }, [score]);
    
    function checkValidSelection(id) {
        let index = cardsArray.findIndex(card => card.id === id);
        if (!cardsArray[index].clicked) {
            return true;
        } else {
            return false;
        }

    }

    return (
        <>
            <p className='score-info'>Score: {score}</p>
            <p className='score-info'>Best Score: {bestScore}</p>
            {gameOver ? <><p className='game-message'>{score === 9 ? 'You win!' : 'Game over!'}</p> <button onClick={reset}>Play again?</button></>: <CardGrid cardsArray={cardsArray} handleClick={handleClick}/>}        
        </>
    )
}