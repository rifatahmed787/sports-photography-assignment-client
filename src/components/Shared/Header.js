import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <li className="font-semibold mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="font-semibold mr-2">
          <Link to="/services">Services</Link>
        </li>
        <li className="font-semibold mr-2">
          <Link to="/blog">Blog</Link>
        </li>
        {user?.uid ? (
          <>
            <li className="font-semibold mr-2">
              <Link to="/addservice">Add Service</Link>
            </li>
            <li className="font-semibold mr-2">
              <Link to="/myreview">My Reviews</Link>
            </li>
            <li className="font-semibold mr-2">
              <button onClick={handleLogOut}>Log out</button>
            </li>
            <>
              {user?.photoURL ? (
                <img
                  className="rounded-full"
                  style={{ width: "30px" }}
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
            <li className="font-semibold mr-2">
              <Link to="/signin">Log in</Link>
            </li>
            <li className="font-semibold">
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}
      </>
      {/* <>
        {user?.photoURL ? (
          <img
            className="rounded-full"
            style={{ width: "30px" }}
            src={user?.photoURL}
            alt=""
            title={user?.displayName}
          />
        ) : (
          <FontAwesomeIcon icon={faUser} className="mt-4 ml-3" />
        )}
      </> */}
    </>
  );

  return (
    <div className="navbar bg-gray-400 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case">
          <img src={logo} alt="" className="w-10 rounded-full" />
        </Link>
        <Link to="/" className="font-semibold">
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
