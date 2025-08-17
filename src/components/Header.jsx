import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-24 mb-8 flex justify-center items-center w-full cursor-default">
      <div className="bg-[#161916] gap-16 text-white flex justify-between items-center px-8 py-4 w-[95vw] cursor-default">
        {/* Logo/Brand */}
        <div className="flex justify-start items-center flex-1">
          <NavLink to="/" className="text-5xl font-bold text-center">
            De Globe Cafe
          </NavLink>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-2">
          <ul className="flex text-xl gap-8 justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Menu"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ddbda1] border-b-2 px-5 border-[#ddbda1] pb-1 cursor-pointer"
                  : "hover:text-[#ddbda1] px-5 hover:border-b-2 border-[#ddbda1] cursor-pointer"
              }
            >
              Menu
            </NavLink>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="flex justify-end items-center flex-1">
          <button className="bg-[#6F4E37] font-semibold text-[#F5E6D3] px-20 py-3 text-lg hover:bg-orange-500 hover:text-white duration-300 transition-colors cursor-pointer">
            <a href="https://www.google.com/search?cs=1&output=search&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&kgs=9d31530bf20705f3" className="cursor-pointer">
              Visit Us Today
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
