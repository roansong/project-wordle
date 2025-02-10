import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map(({guess, id}) => <p className="guess" key={id}>{guess}</p>)}
    </div>
  );
}

export default GuessResults;
