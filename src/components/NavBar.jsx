import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <span className="home">Home</span>
      </NavLink>
    </nav>
  );
}

export default NavBar;
