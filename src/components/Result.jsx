import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confettiImg from "../images/confetti.png";

const Result = ({ result }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleContinue = () => {
    if (!name) return;
    const leaderboards = JSON.parse(localStorage.getItem("leaderboards")) || [];
    leaderboards.push({ name, result });
    localStorage.setItem("leaderboards", JSON.stringify(leaderboards));
    navigate("/leaderboard");
  };

  const handleStartAgain = () => {
    navigate("/game");
  };

  return (
    <div className="container result">
      <div className="header">Times Up!</div>
      <div className="main-content">
        <div className="img-container">
          <img src={confettiImg} />
        </div>
        <div className="alert">
          <h2>{result.toFixed(0)}</h2>
          <div>seconds</div>
          <div className="congrats">Congrats! You got a high score</div>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        <div className="button-container">
          <button onClick={handleStartAgain}>Start again</button>
          <button onClick={handleContinue}>Continue to Leaderboard</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
