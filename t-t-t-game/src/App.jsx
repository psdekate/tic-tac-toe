import "./App.css";
import { Player } from "./components/Player";
import { Gameboard } from "./components/Gameboard";

function App() {
  return (
    <>
      <div>
        <header>
          <h1>Tic Tac Toe</h1>
        </header>
        <div className="gameContainer">
          <div className="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </div>
          <Gameboard />
        </div>
      </div>
    </>
  );
}

export default App;
