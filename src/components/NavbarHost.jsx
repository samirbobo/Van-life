import { NavLink } from "react-router-dom";

export default function NavbarHost() {
  return (
    <nav className="nav-host">
      {/* end: بتمنع تداخل بين الينكات بتاعت الرويت عشان لو عندي كذا نيستت روت شايلن نفس 
      اللينك ميكونش كلهم اكتف */}
      <NavLink to="/host" end className="link">
        Dashboard
      </NavLink>
      <NavLink to="/host/income" className="link">
        Income
      </NavLink>
      <NavLink to="/host/vans" className="link">
        Vans
      </NavLink>
      <NavLink to="/host/reviews" className="link">
        Reviews
      </NavLink>
    </nav>
  );
}
