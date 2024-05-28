import { useEffect } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const vanPromiseData = useLoaderData();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="product-details pb-2">
      <div className="container" style={{ paddingTop: "4rem" }}>
        <Link to="..">
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
              fill="#858585"
            />
          </svg>
          <button className="filter-clear" style={{ marginLeft: "1rem" }}>
            Back to all vans
          </button>
        </Link>
        <Await resolve={vanPromiseData.data}>
          {(data) => {
            if (!data) {
              return (
                <section className="container" style={{ textAlign: "center" }}>
                  <h2 style={{ paddingTop: "12rem" }}>
                    There is no data for this van
                  </h2>
                  <h4>500 - Bad-request</h4>
                </section>
              );
            } else {
              return (
                <article className="van-info details">
                  <img src={data?.vans?.imageUrl} alt="Van Product" />
                  <div style={{ paddingTop: "3rem" }}>
                    <button className={`filter-btn ${data?.vans?.type} active`}>
                      {data?.vans?.type}
                    </button>
                    <header>
                      <h3>{data?.vans?.name}</h3>
                      <div className="price">
                        <span>${data?.vans?.price}</span>
                        <p>/day</p>
                      </div>
                    </header>
                    <p className="descroption">{data?.vans?.description}</p>
                    <Link to=".." className="btn">
                      Rent this van
                    </Link>
                  </div>
                </article>
              );
            }
          }}
        </Await>
      </div>
    </section>
  );
}
