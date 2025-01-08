import "./App.css";
import { useState } from "react";
import { Player } from "./components/Player";
import { Gameboard } from "./components/Gameboard";
import { Log } from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSquareClick(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => (currActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <>
      <div>
        <header>
          <h1>Tic Tac Toe</h1>
        </header>
        <div className="gameContainer">
          <div className="players highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
          </div>
          <Gameboard onSelectSquare={handleSquareClick} turns={gameTurns} />
        </div>
        <Log />
      </div>
    </>
  );
}

export default App;
