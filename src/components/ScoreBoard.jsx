import "../styles/scoreBoard.css";

// This displays the scorring system of current score and highScore
export function DisplayScore({ score, highScore }) {
  return (
    <div className="scoreBoard">  
      <h1 className="header">Memory Card Game</h1>
      <p className="info">
        Don't Click the same Card more than once or you lose
      </p>
      <div className="ScoringContent">
        <div className="score">
          <p>Current Score</p>
          <p>{score}</p>
        </div>
        <div className="highScore">
          <p>High Score</p>
          <p>{highScore}</p>
        </div>
      </div>
    </div>
  );
}
