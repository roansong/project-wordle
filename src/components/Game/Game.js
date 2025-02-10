import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map((_) => {
      return { guess: "     ", id: crypto.randomUUID() };
    })
  );
  const [guessesUsed, setGuessesUsed] = React.useState(0);

  function submitGuess(guess) {
    console.log({ guess });
    console.log(guess === answer);
    addGuess(guess);
  }

  function addGuess(guess) {
    const nextGuess = { ...guesses[guessesUsed], guess };
    const nextGuesses = [...guesses];
    nextGuesses[guessesUsed] = nextGuess;
    setGuesses(nextGuesses);
    setGuessesUsed(guessesUsed + 1);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        submitGuess={submitGuess}
        guessLimitReached={guessesUsed === NUM_OF_GUESSES_ALLOWED}
      />
    </>
  );
}

export default Game;
