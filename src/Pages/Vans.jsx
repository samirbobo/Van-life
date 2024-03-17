import { useEffect, useState } from "react";

export default function Vans() {
  const [loading, setLoading] = useState(true);
  const [vansData, setVansData] = useState([]);
  const [filterVans, setFilterVans] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const fetchVansData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/vans").then((response) =>
        response.json()
      );
      setVansData(response.vans);
      setFilterVans(response.vans);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleActiveBtn = (type) => {
    setActiveButton(type);
    if (type === "clear") {
      setFilterVans(vansData);
      return;
    }
    const filterdData = vansData.filter((van) => van.type === type);
    setFilterVans(filterdData);
  };

  useEffect(() => {
    fetchVansData();
  }, []);

  return loading ? (
    <div className="center-loadin">
      <span></span>
    </div>
  ) : (
    <section className="vans">
      <div className="container">
        <h2>Explore our van options</h2>
        <div className="filter-btns">
          <button
            className={`filter-btn simple ${
              activeButton === "simple" && "active"
            }`}
            id="simple"
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
          <button
            className="filter-clear"
            id="clear"
            onClick={() => handleActiveBtn("clear")}
          >
            Clear filters
          </button>
        </div>
        <div className="vans-content">
          {filterVans.map((van) => (
            <article key={van.id} className="van-info">
              <img src={van.imageUrl} alt={van.simple} />
              <header>
                <h3>{van.name}</h3>
                <div className="price">
                  <span>${van.price}</span>
                  <p>/day</p>
                </div>
              </header>
              <button className={`filter-btn ${van.type} active`}>
                {van.type}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
