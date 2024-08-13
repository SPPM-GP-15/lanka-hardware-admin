import React, { useContext } from "react";
import {
  HomeIcon,
  ShoppingBagIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
  ArchiveBoxIcon,
  ShoppingCartIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const { logout } = useContext(AuthContext);

  const getLinkClasses = (path) => {
    const isActive = currentUrl === path || currentUrl.startsWith(path);
    return `flex items-center px-6 py-2 m-4 text-sm font-medium ${
      isActive
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
              <Link
                to="/dashboard"
                className="text-2xl font-bold text-white"
                onClick={() => {
                  document.title = "Lanka Hardware Dashboard";
                }}
              >
                Lanka Hardware
              </Link>
            </div>
            <nav className="mt-10">
              <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
                <HomeIcon className="w-6 h-6 mr-3" />
                <span>Dashboard</span>
              </Link>
              <Link to="/products" className={getLinkClasses("/products")}>
                <AiFillProduct className="w-6 h-6 mr-3" />
                <span>All Products</span>
              </Link>
              <Link
                to="/post-product"
                className={getLinkClasses("/post-product")}
              >
                <ShoppingCartIcon className="w-6 h-6 mr-3" />
                <span>Add Product</span>
              </Link>

              <Link to="/orders/all" className={getLinkClasses("/orders")}>
                <AdjustmentsVerticalIcon className="w-6 h-6 mr-3" />
                <span>Orders</span>
              </Link>
              <Link to="/users" className={getLinkClasses("/users")}>
                <UserIcon className="w-6 h-6 mr-3" />
                <span>Users</span>
              </Link>
            </nav>
          </div>
          {/* Logout button added here */}
          <div className="mb-6">
            <div
              className={
                "flex items-center px-6 py-2 m-4 text-sm font-medium text-white hover:bg-red-800 rounded-md bg-red-700"
              }
              onClick={logout}
            >
              <ArrowLeftEndOnRectangleIcon className="w-6 h-6 mr-3" />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
