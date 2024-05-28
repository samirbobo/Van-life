/* eslint-disable react-hooks/rules-of-hooks */
import { Await, Link, useLoaderData } from "react-router-dom";
import star from "../../images/star-48.png";
import { Suspense, useEffect, useState } from "react";

export default function Dashboard() {
  const dataPromise = useLoaderData();
  const [data, setData] = useState([]);

  return (
    <section className="dashboard">
      <article className="welcome">
        <h2>Welcome</h2>
        <div className="content-details">
          <p>
            income last <span>30 days</span>
          </p>
          <Link className="link" to="income">
            Details
          </Link>
        </div>
        <h2 className="price">{data.length < 1 ? "$0" : "$2,260"}</h2>
      </article>
      <article className="review-score">
        <div className="review-content">
          <h3>Review score</h3>
          <img className="img-star" src={star} alt="Start" />
          <span>
            <strong>{data.length < 1 ? 0.0 : 5.0}</strong>/5.0
          </span>
        </div>
        <Link className="link" to="reviews">
          Details
        </Link>
      </article>
      <article className="van-list">
        <div className="list">
          <h3>Your listed vans</h3>
          {data.length > 0 && (
            <Link className="link" to="vans">
              View all
            </Link>
          )}
        </div>
        <Suspense fallback={<h2>Loading.... </h2>}>
          <Await resolve={dataPromise.data}>
            {({ vans }) => {
              useEffect(() => {
                setData(vans);
              });
              if (vans.length === 0) {
                return <h2>No vans listed.</h2>;
              }

              return vans.slice(0, -1).map((van) => (
                <Link key={van.id} to={`vans/${van.id}`} className="box-van">
                  <img className="van-img" src={van.imageUrl} alt={van.name} />
                  <div className="box-content">
                    <h4>{van.name}</h4>
                    <span>${van.price}/day</span>
                  </div>
                </Link>
              ));
            }}
          </Await>
        </Suspense>
      </article>
    </section>
  );
}
