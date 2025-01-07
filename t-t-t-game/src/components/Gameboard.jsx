const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function Gameboard() {
  return (
    <>
      <div className="gameBoard">
        {initialGameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="buttonRow">
            {row.map((playerSymbol, colIndex) => (
              <div key={colIndex}>
                <button className="clickButton">{playerSymbol}</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
