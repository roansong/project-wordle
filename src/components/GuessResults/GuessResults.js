import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map(({ guess, id }) => (
          <p className="guess" key={id}>
            {guess && guess.map(({letter, status}, idx) => (
              <span className={`cell ${status}`} key={`${idx}-${letter}`}>{letter}</span>
            ))}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
