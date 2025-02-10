import React from "react";

import { sample, range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner";
import OnScreenKeyboard from "../OnScreenKeyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const INITIAL_LETTER_STATE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").reduce(
  (map, letter) => {
    map[letter] = "unused";
    return map;
  },
  {}
);

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map((_) => {
      return {
        guess: range(5).map((_) => {
          return { letter: "" };
        }),

        id: crypto.randomUUID(),
      };
    })
  );

  const [guess, setGuess] = React.useState("");

  const [letterState, setLetterState] = React.useState(INITIAL_LETTER_STATE);

  const [guessesUsed, setGuessesUsed] = React.useState(0);
  const [hasWon, setHasWon] = React.useState(false);

  const gameState =
    !hasWon && guessesUsed < NUM_OF_GUESSES_ALLOWED
      ? "in-progress"
      : hasWon
      ? "victory"
      : "defeat";

  const gameOver = gameState !== "in-progress";

  function submitGuess() {
    console.log({ guess });
    console.log(guess === answer);
    addGuess(guess);
    setGuess('');
  }

  function addLetter(letter) {
    if (guess.length >= 5) {
      return;
    }
    setGuess(guess + letter)
  }

  function addGuess(guess) {
    const result = checkGuess(guess, answer);
    const nextLetterState = { ...letterState };
    Array.from(result).forEach(({ letter, status }) => {
      nextLetterState[letter] = status;
    });
    setLetterState(nextLetterState);
    const nextGuess = {
      ...guesses[guessesUsed],
      guess: result,
    };
    const nextGuesses = [...guesses];
    nextGuesses[guessesUsed] = nextGuess;
    setGuesses(nextGuesses);
    setGuessesUsed(guessesUsed + 1);
    setHasWon(result.every(({ status }) => status === "correct"));
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        submitGuess={submitGuess}
        guess={guess}
        setGuess={setGuess}
        guessLimitReached={guessesUsed === NUM_OF_GUESSES_ALLOWED}
      />
      <OnScreenKeyboard
        letterState={letterState}
        guess={guess}
        addLetter={addLetter}
        guessLimitReached={guessesUsed === NUM_OF_GUESSES_ALLOWED}
      />
      {gameOver && (
        <GameOverBanner
          guessesUsed={guessesUsed}
          gameState={gameState}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
