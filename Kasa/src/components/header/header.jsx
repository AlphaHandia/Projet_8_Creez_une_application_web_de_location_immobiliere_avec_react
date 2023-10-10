import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import "../../Sass/components/Header.scss";
import "../../Sass/utils/style/_styled-link.scss";

function Header() {
  const location = useLocation();

  return (
    <div className="NavContainer">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="Navcontent">
        <NavLink
          to="/"
          className={`StyledLink ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/A-Propos"
          className={`StyledLink ${
            location.pathname === "/A-Propos" ? "active-link" : ""
          }`}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
