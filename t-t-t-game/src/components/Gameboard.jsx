export function Gameboard({ onSelectSquare, board }) {
  return (
    <>
      <div className="gameBoard">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="buttonRow">
            {row.map((playerSymbol, colIndex) => (
              <div key={colIndex}>
                <button
                  className="clickButton"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
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
