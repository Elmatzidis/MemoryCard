import { RefreshCw } from "lucide-react";
import "../styles/gameOver.css";

export function GameOver({ score, highScore, onRestart }) {
  return (
    <div className="GameOverContent">
      <div className="GameOver">
        <div className="GameOverText">
          <h1>Game Over</h1>
          <p>You picked the same card more than once</p>
        </div>
        <div className="finalScores">
          <div className="finalScore">
            <p className="finalLabel">Score</p>
            <p className="finalValue">{score}</p>
          </div>
          <div className="finalHighScore">
            <p className="finalLabel">High Score</p>
            <p className="finalValue">{highScore}</p>
          </div>
        </div>
        <button onClick={onRestart}>
          <RefreshCw /> Try Again
        </button>
      </div>
    </div>
  );
}
