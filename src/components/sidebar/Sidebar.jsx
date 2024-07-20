import React from "react";
import {
  HomeIcon,
  ShoppingBagIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const getLinkClasses = (path) => {
    return `flex items-center px-6 py-2 m-4 text-sm font-medium ${
      currentUrl === path
        ? "text-white bg-gray-800"
        : "text-gray-400 hover:text-white hover:bg-gray-600"
    } rounded-md`;
  };

  return (
    <>
      <div className="w-[250px] h-screen fixed top-0 left-0 z-10 bg-gray-700">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-start pt-6 ml-8">
              <Link to="/" className="text-2xl font-bold text-white">
                Lanka Hardware
              </Link>
            </div>
            <nav className="mt-10">
              <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
                <HomeIcon className="w-6 h-6 mr-3" />
                <span>Dashboard</span>
              </Link>
              <Link to="/orders" className={getLinkClasses("/orders")}>
                <AdjustmentsVerticalIcon className="w-6 h-6 mr-3" />
                <span>Orders</span>
              </Link>
              <Link to="/users" className={getLinkClasses("/users")}>
                <ShoppingBagIcon className="w-6 h-6 mr-3" />
                <span>Users</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
