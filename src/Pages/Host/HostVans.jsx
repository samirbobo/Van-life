import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

export default function HostVans() {
  const [vansData, setVansData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHostVans = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/host/vans");
      const { vans } = await response.json();
      setVansData(vans);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchHostVans();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (vansData.length === 0) {
    return (
      <section className="host-vans">
        <div>No vans listed.</div>
      </section>
    );
  }

  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      {vansData.map((van) => (
        <Link key={van.id} to={van.id} className="box-van">
          <img className="van-img" src={van.imageUrl} alt={van.name} />
          <div className="box-content">
            <h4>{van.name}</h4>
            <span>${van.price}/day</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
