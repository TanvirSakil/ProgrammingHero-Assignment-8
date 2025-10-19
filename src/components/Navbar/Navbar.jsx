import React from 'react';
import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from 'react-router';



const Navbar = () => {


  return (
    <div className=''>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-purple-700 underline font-semibold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>          
              <li>
                <NavLink
                  to="/apps"
                  className={({ isActive }) =>
                    isActive ? "text-purple-700 underline font-semibold" : ""
                  }
                >
                  Apps
                </NavLink>
              </li>    
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive ? "text-purple-700 underline font-semibold" : ""
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 md:ml-12">
            <img className="w-8" src="/images/logo.png" alt="Logo" />
            <h3 className="text-lg text-purple-700 font-semibold">HERO.IO</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-purple-700 text-purple-700 font-semibold pb-1"
                    : "hover:text-purple-600"
                }
              >
                Home
              </NavLink>   </li>     
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-purple-700 text-purple-700 font-semibold pb-1"
                    : "hover:text-purple-600"
                }
              >
                Apps
              </NavLink>  </li>  
            <li><NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-purple-700 text-purple-700 font-semibold pb-1"
                  : "hover:text-purple-600"
              }
            >
              Installation
            </NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com"
            target="_blank"
            rel="noopener noreferrer" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-2 md:mr-12 "> <i className="fa-solid fa-plus"></i> <FaGithub />Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

