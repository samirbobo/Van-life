import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import Menu from "./Menu";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const loggedIn = localStorage.getItem("loggedIn");
  const navRef = useRef(null);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  useEffect(() => {
    navRef.current.classList.remove("show");
  });

  const styleButton = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "Inter",
    fontSize: "1rem",
    textAlign: "start",
  };

  const handleNav = (link) => {
    if (link === "link") {
      navRef.current.classList.remove("show");
      return;
    }
    navRef.current.classList.toggle("show");
  };

  return (
    <header>
      <div className="container header">
        <div className="header-nav">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <Menu onClick={handleNav} />
        </div>
        <nav ref={navRef} className="main-nav">
          <NavLink
            to="/host"
            className="link"
            onClick={() => handleNav("link")}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className="link"
            onClick={() => handleNav("link")}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className="link"
            onClick={() => handleNav("link")}
          >
            Vans
          </NavLink>
          {!loggedIn ? (
            <NavLink
              to="/login"
              className="link"
              onClick={() => handleNav("link")}
            >
              Login
            </NavLink>
          ) : (
            <button onClick={logOut} style={styleButton} className="link">
              LogOut
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
