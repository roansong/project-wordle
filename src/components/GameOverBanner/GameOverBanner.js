import React from "react";

function RestartButton({restartGame}) {
  return <button onClick={restartGame}>Restart?</button>
}

function GameOverBanner({ guessesUsed, gameState, answer, restartGame }) {
  if (gameState === "victory") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessesUsed} guess{guessesUsed === 1 ? "" : "es"}
          </strong>
          .
        </p>
        <RestartButton restartGame={restartGame}/>
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton restartGame={restartGame}/>
    </div>
  );
}

export default GameOverBanner;
