import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <section className="container" style={{ textAlign: "center" }}>
      <h2 style={{ paddingTop: "10rem" }}>
        Error:{" "}
        {error.status === 400
          ? "Sorry, there is a problem with the server, which we will resolve soon"
          : error.message}
      </h2>
      <h4>
        {error.status} - {error.statusText}
      </h4>
    </section>
  );
}
