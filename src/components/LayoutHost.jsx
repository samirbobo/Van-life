import { Navigate, Outlet } from "react-router-dom";
import NavbarHost from "./NavbarHost";

export default function LayoutHost() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    return <Navigate to="/login?message=You must log in first." />;
  }

  return (
    <section className="container">
      <NavbarHost />
      <Outlet />
    </section>
  );
}
