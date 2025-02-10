import React from "react";

function OnScreenKeyboard({ letterState, addLetter, guessLimitReached }) {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {Array.from("QWERTYUIOP").map((letter) => (
          <button
            className={`key ${letterState[letter]}`}
            key={letter}
            onClick={(e) => {
              e.preventDefault();
              addLetter(letter);
            }}
            disabled={guessLimitReached}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {Array.from("ASDFGHJKL").map((letter) => (
          <button
            className={`key ${letterState[letter]}`}
            key={letter}
            onClick={(e) => {
              e.preventDefault();
              addLetter(letter);
            }}
            disabled={guessLimitReached}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {Array.from("ZXCVBNM").map((letter) => (
          <button
            className={`key ${letterState[letter]}`}
            key={letter}
            onClick={(e) => {
              e.preventDefault();
              addLetter(letter);
            }}
            disabled={guessLimitReached}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OnScreenKeyboard;
