/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, useEffect, useState } from "react";
import FilterVans from "../../components/FilterVans";
import { Await, useLoaderData, useNavigate } from "react-router-dom";

export default function Vans() {
  const dataPromise = useLoaderData();
  const [filterVans, setFilterVans] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleActiveBtn = (type, vans) => {
    setActiveButton(type);
    if (type === "clear") {
      setFilterVans(vans);
      setActiveButton(null);
    } else {
      const filteredData = vans.filter((van) => van.type === type);
      setFilterVans(filteredData);
    }
  };

  return (
    <section className="vans pb-2">
      <div className="container">
        <h2>Explore our van options</h2>
        {/* Suspense: فايدتها انها بتقدر تحافظ علي شكل البيانات بتاعتي وبتحط مكون احتياطي لتامين شكل الصفحه في حاله تاخر البيانات  */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* Await: تستخدم لاستقبال البيانات الاتيه علي شكل وعد او برومس وبتفك البيانات دي عشان اقدر استخدمها عادي ف تطبيقي
            useLoaderData وبتاخد الوعد باستخدام مكون
            وبحط جواها البيانات بتاعتي وببدا ابني الاوامر البرمجيه الخاصه بتاعتي عادي وي كود الاتش ام ال والشكل بتاعي عادي
            وبتستقبل جواها يوز افيكت عادي ولا ينصح استخدام استات عادي لان المكون بتاعي بيكون في خاله رندر فمينفعش اخلي
            اكتر من رندر يحصل في نفس الوقت عشان بيحصل لوب والدنيا هتبوظ وعشان كده استخدامت اليوز افيكت*/}
          <Await resolve={dataPromise.data}>
            {({ vans }) => {
              // Initialize the filterVans state once data is resolved
              useEffect(() => {
                setFilterVans(vans);
              }, [vans]);

              return (
                <>
                  <FilterVans
                    activeButton={activeButton}
                    handleActiveBtn={(type) => handleActiveBtn(type, vans)}
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
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
