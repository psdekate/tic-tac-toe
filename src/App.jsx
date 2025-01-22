import "./App.css";
import { Gameboard } from "./components/Gameboard";
import { Players } from "./components/Player";

function App() {
  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <Players symbol="X" initialName="Player" />
            <Players symbol="O" initialName="Player" />
          </div>
          <Gameboard />
        </div>
      </div>
    </>
  );
}

export default App;
