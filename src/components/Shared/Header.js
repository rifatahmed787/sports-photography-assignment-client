import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };
  // const menuItems = (
  //     <>
  //       <li className="font-semibold mr-2">
  //         <Link to="/">Home</Link>
  //       </li>
  //       {user?.email ? (
  //         <>
  //           <li className="font-semibold mr-2">
  //             <Link to="/orders">Orders</Link>
  //           </li>
  //           <li className="font-semibold mr-2">
  //             {/* <button onClick={handleLogOut}>Log out</button> */}
  //           </li>
  //         </>
  //       ) : (
  //         <>
  //           <li className="font-semibold mr-2">
  //             <Link to="/login">Log in</Link>
  //           </li>
  //           <li className="font-semibold">
  //             <Link to="/signup">Sign up</Link>
  //           </li>
  //         </>
  //       )}
  //     </>
  //   );

  const menuItems = (
    <>
      <li className="font-semibold mr-2">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold mr-2">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-semibold mr-2">
        <Link to="/signin">Log in</Link>
      </li>

      <li className="font-semibold">
        <Link to="/signup">Sign up</Link>
      </li>
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
        <input type="checkbox" className="toggle toggle-md" checked />
      </div>
    </div>
  );
};

export default Header;
