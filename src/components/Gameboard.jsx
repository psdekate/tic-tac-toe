const initialBoard = [null, null, null, null, null, null, null, null, null];

export function Gameboard() {
  return (
    <>
      <div className="board">
        {initialBoard.map((item, itemIndex) => (
          <button key={itemIndex} className="game-button">
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
