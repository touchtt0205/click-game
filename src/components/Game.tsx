// src/components/Game.tsx
import React, { useState } from "react";
import "./Game.css";
import Firework from "./Firework";

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showFirework, setShowFirework] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
    setMessage("You scored a point!");
    setShowFirework(true);
    setTimeout(() => setMessage(""), 1500); // Clear message after 1.5 seconds
  };

  const handleAnimationComplete = () => {
    setShowFirework(false);
  };

  return (
    <div className="game-container">
      <h1>กดดิเกม</h1>
      <div className="score">Score: {score}</div>
      <button className="button" onClick={handleClick}>
        Click Me!
      </button>
      {message && <p>{message}</p>}
      {showFirework && (
        <Firework onAnimationComplete={handleAnimationComplete} />
      )}
    </div>
  );
};

export default Game;
