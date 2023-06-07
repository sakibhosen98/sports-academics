import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'

const NavBar = () => {

  const navOptions = <>
        <li><Link to="">Home</Link></li>
        <li><Link to="">Instructors</Link></li>
        <li><Link to="">Classes</Link></li>
        <li><Link to="">Dashboard</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navOptions}
      </ul>
    </div>
    <div>
      <img className="w-[40px] mx-auto rounded" src={logo} alt="" />
      <a className="text-xl font-semibold">Sports Academies</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <img className="w-[40px] rounded-full" src={logo} alt="" />
  </div>
</div>
  );
};

export default NavBar;