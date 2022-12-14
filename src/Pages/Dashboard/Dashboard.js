import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dasahboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-center text-3xl font-bold text-accent'>Welcome to Dashboard</h1>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dasahboard-drawer" className="drawer-overlay"></label>
                <ul className="menu bg-gray-100 p-4 w-48 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/myHistory'>My History</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                        <li><Link to='/dashboard/manage'>Manage Doctors</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;