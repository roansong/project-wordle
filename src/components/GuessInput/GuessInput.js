import React from "react";

function GuessInput({ submitGuess, guessLimitReached, guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    submitGuess();
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        maxLength={5}
        pattern="\S{5}"
        disabled={guessLimitReached}
      />
    </form>
  );
}

export default GuessInput;
