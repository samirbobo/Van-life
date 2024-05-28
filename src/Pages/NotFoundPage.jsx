import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="page-404">
      <h2>Sorry, the page you were looking for was not found.</h2>
      <Link to="/" className="btn">
        Return to home
      </Link>
    </section>
  );
}
