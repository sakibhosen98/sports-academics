import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaBandcamp, FaCalendar, FaHome, FaSubscript, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
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
            <li><NavLink to="/dashboard/addclass"><FaAddressCard></FaAddressCard> Add Class</NavLink></li>
            <li><NavLink to="/dashboard/home"><FaBandcamp></FaBandcamp> My Selected Class</NavLink></li>
            <li><NavLink><FaSubscript></FaSubscript> Enroll Class</NavLink></li>
            <li><NavLink><FaWallet></FaWallet> Payment</NavLink></li>
            <li><NavLink><FaCalendar></FaCalendar> Payment History</NavLink></li>
            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
