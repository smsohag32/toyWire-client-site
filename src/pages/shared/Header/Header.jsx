import { Link, NavLink, useLocation } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  // route change scroll to top position handle
  const { pathname } = useLocation() || "/";

  //   handle user log out
  const handleLogOut = () => {
    userLogOut().then().catch();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // handle to navLink hide onscroll
  const handleHideNavLink = () => {
    if (window.scrollY >= 90) {
      setIsOpen(false);
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    handleHideNavLink();
    window.addEventListener("scroll", handleHideNavLink);
  }, []);

  return (
    <div
      className={` shadow-sm backdrop-blur-md bg-opacity-90 h-16 flex items-center sticky top-0 left-0 right-0 z-50 py-2 ${
        changeColor ? "bg-white border-b-2" : "bg-white"
      }`}
    >
      <nav className="flex toy-container items-center justify-between">
        <div className="md:hidden">
          {isOpen ? (
            <span onClick={() => setIsOpen(false)}>
              <GrClose className="text-2xl font-bold duration-200" />
            </span>
          ) : (
            <span onClick={() => setIsOpen(true)}>
              <CiMenuFries className="text-2xl font-bold duration-200"></CiMenuFries>
            </span>
          )}
        </div>
        <span>
          <Link className="flex items-center gap-1" to="./">
            <p
              style={{ fontFamily: `'Rubik Puddles', cursive` }}
              className=" font-bold uppercase primary-text flex items-center gap-1 text-xl"
            >
              Toywire
              <span className="ms-1 text-secondary">
                <FaRobot />
              </span>
            </p>
          </Link>
        </span>

        <ul
          className={`flex font-serif uppercase text-sm font-bold leading-relaxed flex-col py-8 md:py-0 bg-slate-200 md:bg-transparent duration-300 transition-all transform  md:text-black absolute md:static gap-[1.5rem] md:flex-row ${
            isOpen
              ? "top-[80px] right-0 left-0 text-center"
              : "-left-60 top-[80px] overflow-hidden duration-100"
          }`}
        >
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
          {user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "primary-text" : "")}
                to="/my-toys"
              >
                MY Toys
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "primary-text" : "")}
                to="/add-toy"
              >
                Add a Toy
              </NavLink>
            </li>
          )}
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
                  <Link to="/userhome" className="justify-between">
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
