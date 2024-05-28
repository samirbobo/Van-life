import React, { useEffect } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function HostVans() {
  const vansPromesData = useLoaderData();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="host-vans">
      <h2>Your listed vans</h2>
      <React.Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={vansPromesData.data}>
          {({ vans }) => {
            if (vans.length === 0) {
              return <h2>No vans listed.</h2>;
            }

            return vans.map((van) => (
              <Link key={van.id} to={van.id} className="box-van">
                <img className="van-img" src={van.imageUrl} alt={van.name} />
                <div className="box-content">
                  <h4>{van.name}</h4>
                  <span>${van.price}/day</span>
                </div>
              </Link>
            ));
          }}
        </Await>
      </React.Suspense>
    </section>
  );
}
