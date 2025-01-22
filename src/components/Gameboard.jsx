export function Gameboard({ gameBoard, onCellClicked }) {
  return (
    <>
      <div className="board">
        {gameBoard.map((item, itemIndex) => (
          <button key={itemIndex} className="game-button" onClick={() => onCellClicked(itemIndex)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
