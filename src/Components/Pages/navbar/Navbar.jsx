import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleUserClick = () => {
    setShowOptions(!showOptions);
  };

  const { user, logOut } = useContext(AuthContext);

  const navlinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ED9F4A] underline" : ""
          }
          to="/"
        >
          <span className="font-young">Home</span>
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ED9F4A] underline" : ""
            }
            to="/addproducts"
          >
            <span className="font-young">Add Product</span>
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#ED9F4A] underline" : ""
            }
            to="/mycart"
          >
            <span className="font-young">My Cart</span>
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar lg:px-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link
            to="/"
            className="font-semibold text-xl font-young text-[#163A1E]"
          >
            LuminaryLabs
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="">
              <div
                onClick={handleUserClick}
                className="cursor-pointer flex items-center"
              >
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full mx-2"
                  />
                )}
              </div>
              {showOptions && (
                <div className="absolute right-0 mt-2 p-2 bg-white border rounded shadow">
                  <div
                    className="cursor-pointer hover:text-blue-500 font-young"
                    onClick={handleUserClick}
                  >
                    {user.displayName}
                  </div>
                  <div
                    className="cursor-pointer hover:text-blue-500 font-young btn"
                    onClick={logOut}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-ghost font-young">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
