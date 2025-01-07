import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function Gameboard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleButtonClick(row, col) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((initialArray) => [...initialArray])];
      updatedBoard[row][col] = "X";
      return updatedBoard;
    });
  }

  return (
    <>
      <div className="gameBoard">
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="buttonRow">
            {row.map((playerSymbol, colIndex) => (
              <div key={colIndex}>
                <button
                  className="clickButton"
                  onClick={() => handleButtonClick(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
