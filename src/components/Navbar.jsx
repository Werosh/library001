import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 text-white bg-gray-800 bg-opacity-55">
      <div>
        <h1 className="text-[24px] font-bold cursor-pointer">BuY Book Anywhere</h1>
      </div>

      {/* Hamburger and Close Icons with Framer Motion */}
      <div className="lg:hidden">
        {isMenuOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <IoClose
              onClick={toggleMenu}
              className="text-2xl transition-transform duration-300 transform cursor-pointer hover:scale-110"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-2xl transition-transform duration-300 transform cursor-pointer hover:scale-110"
            />
          </motion.div>
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`text-[20px] gap-6 rounded-md absolute lg:static top-14 right-0 bg-gray-800 bg-opacity-55 lg:bg-transparent w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-4 items-center space-y-4 lg:space-y-0 py-4 lg:py-0 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {[
          { to: "/", title: "Home", icon: <IoHome /> },
          { to: "/trending", title: "Trending", icon: <FaFire /> },
          { to: "/new", title: "Find", icon: <FaSearch /> },
          { to: "/request", title: "Request", icon: <MdAddComment /> },
          { to: "/aboutus", title: "About Us", icon: <IoBookmarks /> },
          { to: "/login", title: "Login", icon: <FaUserAstronaut /> },
        ].map(({ to, title, icon }, index) => (
          <li key={index} className="relative group">
            <Link
              to={to}
              onClick={toggleMenu}
              title={title}
              className="flex items-center gap-2 pl-2 hover:text-[#FFD700] transition-colors ease-in-out duration-300"
            >
              {title}
              <span className="transition-transform duration-300 transform group-hover:scale-125">
                {icon}
              </span>
            </Link>
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"
              aria-hidden="true"
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
