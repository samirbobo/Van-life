import { Outlet } from "react-router-dom";
import NavbarHost from "./NavbarHost";

export default function LayoutHost() {
  return (
    <main className="container">
      <NavbarHost />
      <Outlet />
    </main>
  );
}
