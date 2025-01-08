import { useState } from "react";

export function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let nameInput = <h3 className="player-name">{playerName}</h3>;

  if (isEditing) {
    nameInput = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  function handleEditing() {
    setIsEditing((editing) => !editing);
  }

  return (
    <div className={isActive ? "active" : "player"}>
      {nameInput}
      <h3>{symbol}</h3>
      <button className="editButton" onClick={handleEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
