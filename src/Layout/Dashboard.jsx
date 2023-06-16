import { NavLink, Outlet } from "react-router-dom";
import {  FaBook, FaBookmark, FaHistory, FaHome, FaMandalorian, FaPager, FaRegAddressCard, FaSubscript, FaUsers, FaWallet } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure]= useAxiosSecure();
  const [role, setRole] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/users/admin/${user?.email}`).then(res => {
      setRole(res.data);
      console.log('user role', res.data);
    })
  } ,[])

  const userStatus = role.role;
  
  return (
    <>
    <Helmet>
      <title>Sports Academies | Dashboard</title>
    </Helmet>
    <div className={`d-${user ? 'block' : 'none'}`}>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#926b23] text-base-content">
            {
              userStatus === 'admin' ? <>
            <li><NavLink to="/dashboard/"><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to="/dashboard/manageclasses"><FaWallet></FaWallet> Manage Classes</NavLink></li>
            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
              </> : 
              
              userStatus === 'instructor' ? <>
              <li><NavLink to="/dashboard/"><FaHome></FaHome>Instructor Home</NavLink></li>
               <li><NavLink to="/dashboard/addclass"><FaRegAddressCard></FaRegAddressCard> Add Class</NavLink></li>
              <li><NavLink to="/dashboard/myclasses"><FaBook></FaBook> My Classes</NavLink></li>
            <li><NavLink><FaSubscript></FaSubscript> Enroll Class</NavLink></li>
            <li><NavLink><FaHistory></FaHistory> Payment History</NavLink></li>
              </> : <>
              <li><NavLink><FaHome></FaHome>Student Home</NavLink></li>
            <li><NavLink to="/dashboard/myselectedclass"><FaBookmark></FaBookmark>My Selected Class</NavLink></li>
            <li><NavLink><FaWallet></FaWallet> Enroll class</NavLink></li>
              </>
            }
            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to="/instructors"><FaMandalorian></FaMandalorian>Instructors</NavLink></li>
            <li><NavLink to="/classes"><FaPager></FaPager>classes</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
