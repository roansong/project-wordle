import React from "react";

function GuessInput({ submitGuess, guessLimitReached }) {
  const [guess, setGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    submitGuess(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        name="guess-input"
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
