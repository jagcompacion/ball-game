import { useState } from 'react';
import './App.css';
import Game from './Game';
import Result from './Result';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setResult] = useState(1);

  const startGame = () => {
    setGameStarted(true);
  };

  const handleResult = (result) => {
    setResult(result);
    setGameStarted(false);
  }

  return (
    <div className="App">
      {/* {!gameStarted && !result && (
        <button onClick={startGame}>Tap to begin</button>
      )}
      {gameStarted && <Game onResult={handleResult} />} */}
      {result && <Result result={result} />}
    </div>
  );
};

export default App;