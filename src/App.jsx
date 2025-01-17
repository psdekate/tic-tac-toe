import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="game-wrapper">
          <h1>Tic-Tac-Toe</h1>
          <div className="game-header">
            <div className="player">
              <h2>Player</h2>
              <button>Edit</button>
            </div>
            <div className="player">
              <h2>Player</h2>
              <button>Edit</button>
            </div>
          </div>
          <div className="game-body"></div>
        </div>
      </div>
    </>
  );
}

export default App;
