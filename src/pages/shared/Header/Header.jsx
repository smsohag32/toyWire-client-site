import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/toyLogo.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";
const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  // route change scroll to top position handle
  const { pathname } = useLocation() || "/";

  //   handle user log out
  const handleLogOut = () => {
    userLogOut().then().catch();
  };
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
        {user ? (
          <>
            <div title={user.displayName} className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard" className="justify-between">
                    Profile
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login" className="primary-btn uppercase">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
