import { useEffect } from "react";
import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

export default function HostVanDetails() {
  const promiseData = useLoaderData();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // cd../  اكني بستخدم طريقه الترمنال ف الرجوع للملف السابق ولكن هنا بيرجع لاول اب عندي في النستت روات
  // Example: url => /host/vans/1  to  url => /host/
  // relative="path": بتحل المشكله بتاعت الرجوع الي اول اب ف النتستت روات وبترجع مره واحده من ال يو ار ال
  // Example: url => /host/vans/1  to  url => /host/vans/

  return (
    <section style={{paddingBottom: "2rem"}}>
      <Link
        to=".."
        relative="path"
        className="filter-clear"
        style={{ marginLeft: "0" }}
      >
        <svg
          style={{ marginRight: "1rem" }}
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
        Back to all vans
      </Link>
      <Await resolve={promiseData.data}>
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
          }

          return (
            <article className="host-van-details">
              <div className="headr-van-details">
                <img
                  className="van-img"
                  src={data?.vans?.imageUrl}
                  alt={data?.vans?.name}
                />
                <div className="header-content">
                  <button className={`filter-btn ${data?.vans?.type} active`}>
                    {data?.vans?.type}
                  </button>
                  <h3>{data?.vans?.name}</h3>
                  <p>
                    ${data?.vans?.price}
                    <span>/day</span>
                  </p>
                </div>
              </div>
              <nav className="nav-host">
                <NavLink to="." end className="link">
                  Details
                </NavLink>
                <NavLink to="pricing" className="link">
                  Pricing
                </NavLink>
                <NavLink to="photos" className="link">
                  Photos
                </NavLink>
              </nav>
              <div className="content-van-details">
                <Outlet context={[data?.vans]} />
              </div>
            </article>
          );
        }}
      </Await>
    </section>
  );
}
