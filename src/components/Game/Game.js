import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function submitGuess(guess) {
    console.log({guess});
    console.log(guess === answer);
  }

  return (
    <>
      <div>Game Board</div>
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
