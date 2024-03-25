export default function FilterVans({ activeButton, handleActiveBtn }) {
  return (
    <div className="filter-btns">
      <button
        className={`filter-btn simple ${activeButton === "simple" && "active"}`}
        onClick={() => handleActiveBtn("simple")}
      >
        Simple
      </button>
      <button
        className={`filter-btn luxury  ${
          activeButton === "luxury" && "active"
        }`}
        onClick={() => handleActiveBtn("luxury")}
      >
        Luxury
      </button>
      <button
        className={`filter-btn rugged  ${
          activeButton === "rugged" && "active"
        }`}
        onClick={() => handleActiveBtn("rugged")}
      >
        Rugged
      </button>
      {activeButton && (
        <button
          className="filter-clear"
          onClick={() => handleActiveBtn("clear")}
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
