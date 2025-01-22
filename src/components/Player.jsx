export function Players({ name, symbol }) {
  return (
    <>
      <div className="players">
        <div className="player">
          <h2>{name}</h2>
          <p>{symbol}</p>
          <button>Edit</button>
        </div>
      </div>
    </>
  );
}
