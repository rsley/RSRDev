/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Rafael Soley Robles                                                     │
  │ v1.0.0                                                                  │
  │                                                                         │
  │ Limited Source Software, see LICENSE.                                   │
  │ © All rights reserved.                                                  │
  │                                                                         │
  │ The above copyright notice and this permission shall be included in all │
  │ copies or substantial portions of the Software.                         │
  └─────────────────────────────────────────────────────────────────────────┘
 */

import { useState } from "react";
import {
  FaHouse,
  FaMagnifyingGlass,
  FaUser,
  FaGear,
  FaBell,
  FaInfo,
  FaChartBar,
} from "react-icons/fa6";
import { Link } from "react-router";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-16 h-screen text-white flex flex-col justify-between border-r overflow-visible">
      {/* Top icons */}
      <div className="flex flex-col items-center space-y-4 mt-4">
        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaHouse />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Home
          </span>
        </div>

        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaMagnifyingGlass />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Search
          </span>
        </div>

        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaUser />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Profile
          </span>
        </div>

        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaGear />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Settings
          </span>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center space-y-6 mb-4">
        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaBell />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Notifications
          </span>
        </div>

        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaInfo />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Info
          </span>
        </div>

        <div className="relative group p-2">
          <Link
            className="text-xl cursor-pointer text-gray-400 hover:text-gray-500"
            to="#cta"
          >
            <FaChartBar />
          </Link>
          <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 text-sm font-bold bg-gray-800 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Analytics
          </span>
        </div>
      </div>
    </div>
  );
}
