import React from "react";
import { Link } from "react-router-dom";

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
    </>
  );

  return (
    <div className="navbar bg-gray-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src={logo} alt="" /> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-success">Appoinment</button>
      </div>
    </div>
  );
};

export default Header;
