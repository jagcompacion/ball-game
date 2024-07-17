import { Routes, Route, useNavigate } from "react-router-dom";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  const InitGame = () => <button onClick={startGame}>Tap to begin</button>;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<InitGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
};

export default App;
