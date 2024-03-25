import { useEffect, useState } from "react";
import FilterVans from "../../components/FilterVans";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

export default function Vans() {
  const [loading, setLoading] = useState(true);
  const [vansData, setVansData] = useState([]);
  const [filterVans, setFilterVans] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleActiveBtn = (type) => {
    setActiveButton(type);
    if (type === "clear") {
      setFilterVans(vansData);
      setActiveButton(null);
      return;
    }
    const filterdData = vansData.filter((van) => van.type === type);
    setFilterVans(filterdData);
  };

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

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchVansData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="vans">
      <div className="container">
        <h2>Explore our van options</h2>
        <FilterVans
          activeButton={activeButton}
          handleActiveBtn={handleActiveBtn}
        />
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
              <button
                className={`filter-btn ${van.type} active`}
                onClick={() => navigate(`/vans/${van.id}`)}
              >
                {van.type}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
