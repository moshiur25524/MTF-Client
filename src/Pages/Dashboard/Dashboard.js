import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineManageAccounts, MdReviews } from "react-icons/md";
import { ImHistory } from "react-icons/im";
import { GiMedicalPack } from "react-icons/gi";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dasahboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h1 className="text-center text-3xl font-bold text-accent">
          Welcome to Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dasahboard-drawer" className="drawer-overlay"></label>
        <ul className="menu bg-gray-100 p-4 w-48 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">
              <GiMedicalPack /> Appointments
            </Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">
              <MdReviews /> Reviews
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myHistory">
              <ImHistory /> History
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">
                  <AiOutlineUser /> All Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">
                  <AiOutlineUserAdd /> Add Doctor
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage">
                  <MdOutlineManageAccounts /> Manage Doctors
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
