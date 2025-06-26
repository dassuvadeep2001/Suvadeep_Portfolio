import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { MdSchool, MdBuild, MdWork, MdCardMembership, MdSportsSoccer } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Education", path: "/education", icon: <MdSchool size={20} /> },
    { name: "Skill", path: "/skill", icon: <MdBuild size={20} /> },
    { name: "Projects", path: "/projects", icon: <MdWork size={20} /> },
    { name: "Certificates", path: "/certificates", icon: <MdCardMembership size={20} /> },
    { name: "Hobbies", path: "/hobbies", icon: <MdSportsSoccer size={20} /> },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-700 hover:text-black transition flex items-center">
          <FaUserGraduate className="w-7 h-7 text-gray-700" />
          <span className="ml-2">Suvadeep</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-gray-500 font-medium hover:text-gray-900 transition relative ${
                  location.pathname === link.path ? "after:text-black after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-black" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full fixed top-16 left-0 shadow-lg py-4 px-6 rounded-b-4xl">
          <ul className="grid grid-cols-3 gap-4">
            {navLinks.map((link) => (
              <li key={link.name} className="text-center">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-col items-center text-gray-700 font-medium relative p-2 ${
                    location.pathname === link.path ? "text-black after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[1px] after:bg-black" : ""
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


