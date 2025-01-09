export function Gameover({ winner, onRestart }) {
  return (
    <div>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It&apos;s a Draw</p>}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
