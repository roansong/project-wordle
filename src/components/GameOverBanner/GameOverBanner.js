import React from "react";

function GameOverBanner({ guessesUsed, gameState, answer }) {
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
      </div>
    );
  }
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameOverBanner;
