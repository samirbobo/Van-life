import { Link } from "react-router-dom";
import aboutImg from "../images/about.png";

export default function About() {
  return (
    <section className="about pb-2">
      <img src={aboutImg} className="about-hero-image" alt="aboutImg" />
      <div className="container">
        <article className="about-page-content">
          <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </article>

        <div className="about-page-cta">
          <h3>Your destination is waiting. Your van is ready.</h3>
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}
