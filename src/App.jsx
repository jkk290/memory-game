import { useState } from 'react'
import './App.css'
import { CardGrid } from './components/CardGrid'

function App() {  
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateScore() {
    setScore(prevScore => {
      const newScore = prevScore + 1;

      setBestScore(prevBestScore => {
        return Math.max(prevBestScore, newScore);
      });

      return newScore;
    });
  };

  return (
    <>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <CardGrid updateScore={updateScore}/>
    </>
  )
}

export default App
