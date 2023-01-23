import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";
import { AuthContext } from "../contexts/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        toast.success("Successfully loged out");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <>
        <li
          className={`font-semibold text-white mr-2 ${
            location.pathname === "/"
              ? "border rounded-lg border-black dark:border-green-300"
              : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`font-semibold text-white mr-2 ${
            location.pathname === "/services"
              ? "border rounded-lg border-black dark:border-green-300"
              : ""
          }`}
        >
          <Link to="/services">Services</Link>
        </li>
        <li
          className={`font-semibold text-white mr-2 ${
            location.pathname === "/blog"
              ? "border rounded-lg border-black dark:border-green-300"
              : ""
          }`}
        >
          <Link to="/blog">Blog</Link>
        </li>
        {user?.uid ? (
          <>
            <li
              className={`font-semibold text-white mr-2 ${
                location.pathname === "/addservice"
                  ? "border rounded-lg border-black dark:border-green-300"
                  : ""
              }`}
            >
              <Link to="/addservice">Add Service</Link>
            </li>
            <li
              className={`font-semibold text-white mr-2 ${
                location.pathname === "/myreview"
                  ? "border rounded-lg border-black dark:border-green-300"
                  : ""
              }`}
            >
              <Link to="/myreview">My Reviews</Link>
            </li>
            <li className="font-semibold mr-2 text-white">
              <button onClick={handleLogOut}>Log out</button>
            </li>
            <>
              {user?.photoURL ? (
                <img
                  className="rounded-full mt-2.5"
                  style={{ width: "32px", height: "32px" }}
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              ) : (
                <FontAwesomeIcon icon={faUser} className="mt-4 ml-3" />
              )}
            </>
          </>
        ) : (
          <>
            <li
              className={`font-semibold text-white mr-2 ${
                location.pathname === "/signin"
                  ? "border rounded-lg border-black dark:border-green-300"
                  : ""
              }`}
            >
              <Link to="/signin">Log in</Link>
            </li>
            <li
              className={`font-semibold text-white ${
                location.pathname === "/signup"
                  ? "border rounded-lg border-black dark:border-green-300"
                  : ""
              }`}
            >
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}
      </>
    </>
  );

  return (
    <div className="navbar bg-[#005F5F]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" bg-[#005F5F] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-[#005F5F] menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="px-5 bg-[#005F5F]">
          <img src={logo} alt="" className="w-10 rounded-full" />
        </Link>
        <Link to="/" className="font-semibold text-white">
          Sports Photography
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <input onClick={themeToggle} type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Header;
