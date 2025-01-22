import { useState } from "react";
import { winningCombinations } from "./win";
import "./App.css";
import { Gameboard } from "./components/Gameboard";
import { Players } from "./components/Player";

const initialBoard = [null, null, null, null, null, null, null, null, null];

function App() {
  const [prevBoard, setPrevBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function checkWinner(updatedBoard) {
    for (const [a, b, c] of winningCombinations) {
      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        return updatedBoard[a];
      }
    }
    return null;
  }

  function handleClicked(index) {
    if (!prevBoard[index] && !winner) {
      const updatedBoard = [...prevBoard];
      updatedBoard[index] = currentPlayer;
      setPrevBoard(updatedBoard);

      const newWinner = checkWinner(updatedBoard);
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
      }
    }
  }

  function handleReset() {
    setPrevBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <Players symbol="X" initialName="Player" currentPlayer={currentPlayer} />
            <Players symbol="O" initialName="Player" currentPlayer={currentPlayer} />
          </div>
          {winner ? (
            <div className="game-stat">
              <h3>Winner is {winner}</h3>
              <button onClick={handleReset} className="reset">
                Reset
              </button>
            </div>
          ) : prevBoard.every((cell) => cell !== null) ? (
            <div className="game-stat">
              <h3>It's a draw</h3>
              <button onClick={handleReset} className="reset">
                Reset
              </button>
            </div>
          ) : null}
          <Gameboard gameBoard={prevBoard} onCellClicked={handleClicked} />
        </div>
      </div>
    </>
  );
}

export default App;
