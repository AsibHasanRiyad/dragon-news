import { NavLink } from "react-router-dom";
import userProfile from '../../assets/user.png'

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-16">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F] text-lg"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#706F6F] text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className=" w-12 rounded-full mr-3">
            <img src={userProfile}/>
          </div>
        </div>
        <button className=" px-8 py-2 bg-[#403F3F] text-white text-xl font-semibold">
          <NavLink>Login</NavLink>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
