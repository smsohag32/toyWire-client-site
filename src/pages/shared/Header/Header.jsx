import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/toyLogo.png";
import { useEffect } from "react";
const Header = () => {
  // route change scroll to top position handle
  const { pathname } = useLocation() || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-slate-100 shadow-sm backdrop-blur-2xl bg-opacity-90 sticky top-0 left-0 right-0 z-50 py-2">
      <nav className="flex toy-container items-center justify-between">
        <span>
          <Link className="flex items-center gap-1" to="./">
            <img className="w-10" src={logo} alt="logo" />
            <p
              style={{ fontFamily: `'Pacifico', cursive` }}
              className=" font-bold text-xl"
            >
              <span className="secondary-text">T</span>oyWire
            </p>
          </Link>
        </span>

        <ul className="flex flex-col absolute md:static gap-[1.5rem] md:flex-row">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/alltoys"
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/mytoys"
            >
              MY Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/addtoy"
            >
              Add a Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <Link to="/login" className="primary-btn">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
