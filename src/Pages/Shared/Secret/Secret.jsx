
const Secret = () => {
  return (
    <div>
        <h2>This is Secret route</h2>
    </div>
  );
};

export default Secret;

// import { NavLink, Outlet } from "react-router-dom";
// import { FaAddressCard, FaCalendar, FaHome, FaSubscript, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// // import { AuthContext } from "../../../Providers/AuthProvider";

// const Dashboard = () => {
//   const {user} = useContext(AuthContext);
//   console.log('user dashboard',user)
  
//   // TODO: laod data from the serer to dynamic isAdmin based on Data
//   const isAdmin = true;

//   return (
//     <div>
//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//           <Outlet></Outlet>
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden"
//           >
//             Open drawer
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 h-full bg-[#926b23] text-base-content">
//             {
//               isAdmin ? <>
//             <li><NavLink to="/dashboard/"><FaAddressCard></FaAddressCard> Admin Home</NavLink></li>
//             <li><NavLink to="/dashboard/manageclasses"><FaWallet></FaWallet> Manage Classes</NavLink></li>
//             <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
//             <li><NavLink to="/dashboard/myselectedclass"><FaHome></FaHome>My Selected Class</NavLink></li>
//             <li><NavLink to="/dashboard/myclasses"><FaSubscript></FaSubscript> My Classes</NavLink></li>
//               </> : <>
//             <li><NavLink><FaSubscript></FaSubscript> Enroll Class</NavLink></li>
//             <li><NavLink><FaCalendar></FaCalendar> Payment History</NavLink></li>
//                <li><NavLink to="/dashboard/addclass"><FaUtensils></FaUtensils> Add Class</NavLink></li>
//             <li><NavLink><FaWallet></FaWallet> Payment</NavLink></li>
//             <li><NavLink to="/dashboard/manageusers"><FaSubscript></FaSubscript> Manage Users</NavLink></li>
//             <li><NavLink><FaSubscript></FaSubscript> Enroll Class</NavLink></li>
//             <li><NavLink><FaSubscript></FaSubscript> FeedBack</NavLink></li>
//             <li><NavLink><FaSubscript></FaSubscript>My Classes</NavLink></li>
//               </>
//             }
           
//             <div className="divider"></div>
//             <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
