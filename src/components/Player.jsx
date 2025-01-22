import { useState } from "react";

export function Players({ symbol, initialName, currentPlayer, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const editClick = (
    <input
      type="text"
      required
      className="name-input"
      value={playerName}
      onChange={handleNameChange}
    />
  );

  const activePlayer = symbol === currentPlayer ? "player active" : "player";

  function handleClick() {
    if (isEditing) {
      onNameChange(playerName);
    }
    setIsEditing((click) => !click);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <>
      <div className={activePlayer}>
        <div className="player-name">
          {isEditing ? editClick : <h2>{playerName}</h2>}
          <h2>{symbol}</h2>
        </div>
        <button onClick={handleClick} className="name-edit">
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}
