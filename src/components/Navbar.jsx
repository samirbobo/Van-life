import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <header>
      <div className="container header">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLink to="/about" className="link">
            About
          </NavLink>
          <NavLink to="/vans" className="link">
            Vans
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
