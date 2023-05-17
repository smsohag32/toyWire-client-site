import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-100 shadow-sm backdrop-blur-2xl bg-opacity-90 sticky top-0 left-0 right-0 z-50 py-2">
      <nav className="flex toy-container items-center justify-between">
        <div>
          <h3>
            Toy<span>Wire</span>
          </h3>
        </div>

        <ul className="flex flex-col gap-[1.5rem] md:flex-row">
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
              to="/"
            >
              MY Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-text" : "")}
              to="/"
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
