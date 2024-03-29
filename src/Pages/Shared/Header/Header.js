import { signOut } from "firebase/auth";
import React from "react";
import { MdHome } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { useAuthState } from "react-firebase-hooks/auth";
import headerIcon from "../../../Features/Icons/icons8-makerbot-industries-an-american-desktop-3d-printer-manufacturer-25.png";
import auth from "../../../firebase.init";
import CustomLink from "../../Shared/CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);

  const menuItem = (
    <>
      <li>
        <CustomLink to="/">
          <MdHome style={{ fontSize: "2em" }} />
        </CustomLink>
      </li>
      <li>
        <CustomLink to="/appointment">Appointment</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <CustomLink to="/contact">Contact</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
      )}
    </>
  );

  const handleSingOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <div className="navbar bg-base-100">
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
              {menuItem}
            </ul>
          </div>
          <CustomLink to="/" className="btn btn-ghost normal-case text-xl">
            <img src={headerIcon} alt="Header Icon" />
          </CustomLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex={1}
            htmlFor="dasahboard-drawer"
            className="btn btn-ghost lg:hidden"
          >
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
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="w-10 mask mask-hexagon"
                src={
                  user?.photoURL ||
                  "https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png"
                }
                alt=""
              />

              <li className="mr-8 btn btn-xs btn-success">
                {" "}
                <span>{user.displayName}</span>
              </li>
              <li>
                <CustomLink
                  onClick={handleSingOut}
                  className="btn md:p-4 py-2 block hover:text-purple-400"
                  to="/login"
                >
                  SignOut
                </CustomLink>
              </li>
            </>
          ) : (
            <li>
              <CustomLink
                className="btn md:p-4 py-2 block hover:text-purple-400"
                to="/login"
              >
                Login
              </CustomLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
