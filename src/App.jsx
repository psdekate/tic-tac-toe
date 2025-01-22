import "./App.css";
import { Players } from "./components/Player";

function App() {
  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <Players name="Player" symbol="X" />
            <Players name="Player" symbol="O" />
          </div>
          <div className="game-body"></div>
        </div>
      </div>
    </>
  );
}

export default App;
