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
import {
  FaHouse,
  FaMagnifyingGlass,
  FaUser,
  FaGear,
  FaBell,
  FaInfo,
  FaChartBar,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { Sidebar, SidebarItem } from "./Loader";

export default function LoadedSidebar() {
  const location = useLocation();

  const sidebarItems = [
    { text: "Home", icon: <FaHouse />, paths: ["/", "/home"] },
    {
      text: "Search",
      icon: <FaMagnifyingGlass />,
      paths: ["/search", "/find"],
    },
    { text: "Profile", icon: <FaUser />, paths: ["/profile", "/user"] },
    { divider: true }, // Divider placement
    {
      text: "Settings",
      icon: <FaGear />,
      paths: ["/settings", "/preferences"],
    },
    {
      text: "Notifications",
      icon: <FaBell />,
      paths: ["/notifications", "/alerts"],
    },
    { text: "About", icon: <FaInfo />, paths: ["/about", "/info"] },
    { text: "Stats", icon: <FaChartBar />, paths: ["/stats", "/analytics"] },
  ];

  return (
    <Sidebar>
      {sidebarItems.map((item, index) => {
        // Render divider if the item has a divider property
        if (item.divider) {
          return <hr key={`divider-${index}`} className="my-3 text-white" />;
        }

        // Determine if the current path matches any of the item's paths
        const isActive =
          item.text === "Home"
            ? item.paths.includes(location.pathname) // Exact match for "Home"
            : item.paths.some((path) => location.pathname.startsWith(path)); // Use startsWith for others

        // Use the first path in the paths array as the main link
        const primaryPath = item.paths[0];

        return (
          <Link to={primaryPath} key={item.text}>
            <SidebarItem icon={item.icon} text={item.text} active={isActive} />
          </Link>
        );
      })}
    </Sidebar>
  );
}
