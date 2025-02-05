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

  Thanks to nimone on GitHub for the original code.
 */

import { FaXmark, FaBars } from "react-icons/fa6";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  let name = "Name Surname";
  let email = "name@surname.com";

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r border-white shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.rsrdev.com/group-logo"
              className={`overflow-hidden transition-all ${
                expanded ? "w-10" : "w-0"
              }`}
              alt=""
            />
            {expanded && (
              <span className="text-white text-md ml-4">RSR Development</span>
            )}
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg text-agray-300 hover:text-white hover:bg-agray-600"
          >
            {expanded ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-white flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Name+Surname"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
                    flex justify-between items-center
                    overflow-hidden transition-all ${
                      expanded ? "w-52 ml-3" : "w-0"
                    }
                `}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-white">{name}</h4>
              <span className="text-xs text-white">{email}</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
              relative flex items-center py-2 px-3 my-1
              font-medium rounded-md cursor-pointer
              transition-all group
              ${
                active
                  ? "bg-gradient-to-tr from-ablue-900 to-ablue-950 text-white"
                  : "transition-all hover:bg-agray-600 hover:text-white text-agray-300"
              }
          `}
    >
      {icon}
      <span className={`overflow-hidden ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-agray-600 text-white text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
