const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function Gameboard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleButtonClick(row, col) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((initialArray) => [...initialArray])];
  //     updatedBoard[row][col] = playerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <>
      <div className="gameBoard">
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="buttonRow">
            {row.map((playerSymbol, colIndex) => (
              <div key={colIndex}>
                <button className="clickButton" onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
