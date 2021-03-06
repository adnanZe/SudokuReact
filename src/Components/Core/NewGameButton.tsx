import React from "react";

interface NewGameProps {
  onNewGameRequest(): void;
}

function NewGameButton(props: NewGameProps): JSX.Element {
  return (
    <button id="new-game" className="new-game" onClick={props.onNewGameRequest}>
      New Game
    </button>
  );
}

export default NewGameButton;
