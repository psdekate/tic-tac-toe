import { useState } from "react";

export function Players({ symbol, initialName }) {
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

  function handleClick() {
    setIsEditing((click) => !click);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <>
      <div className="player">
        <div className="player-name">
          {isEditing ? editClick : <h2>{playerName}</h2>}
          <h2>{symbol}</h2>
        </div>
        <button onClick={handleClick} className="name-edit">
          Edit
        </button>
      </div>
    </>
  );
}
