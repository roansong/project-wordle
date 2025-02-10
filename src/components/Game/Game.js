import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function submitGuess(guess) {
    console.log({ guess });
    console.log(guess === answer);
    addGuess(guess);
  }

  function addGuess(guess) {
    const nextGuesses = [...guesses, { guess, id: crypto.randomUUID() }];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
