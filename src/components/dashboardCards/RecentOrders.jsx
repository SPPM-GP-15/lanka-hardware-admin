import React from "react";
import { Link } from "react-router-dom";

function RecentOrders() {
  return (
    <div className="w-4/6  shadow-lg rounded-xl  h-fit">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
        <div className="flex items-center justify-between  sm:space-x-12 ">
          <div className="text-2xl font-bold text-gray-700 mb-4 ml-2">
            Recent Orders
          </div>
          <Link
            to="/orders/all"
            className="text-xs text-blue-500 hover:text-blue-600 hover:border-b hover:border-blue-300"
          >
            View all orders
          </Link>
        </div>
        <table className="w-full rounded-full table-auto">
          <thead className="text-sm ">
            <tr className="text-base font-bold  bg-gray-50 text-center">
              <th className="px-4 py-3 border-b-2 ">User</th>
              <th className="px-4 py-3 border-b-2 ">Location</th>
              <th className="px-4 py-3 border-b-2 ">Qty</th>
              <th className="px-4 py-3 border-b-2 ">Date</th>
              <th className="px-4 py-3 border-b-2 ">Total Price</th>
              <th className="px-4 py-3 border-b-2 ">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal  bg-white">
            <tr className="py-10 border-b border-gray-200  text-gray-700 text-center">
              <td className="px-4 py-4">Ahmed Anwer</td>
              <td className="px-4 py-4">Kurunegela</td>
              <td className="px-4 py-4">10</td>
              <td className="px-4 py-4">22/07/2024</td>
              <td className="px-4 py-4">Rs. 1000.00</td>
              <td className="px-5 py-5 text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-blue-200 rounded-full opacity-50"
                  ></span>
                  <span className="relative">new</span>
                </span>
              </td>
            </tr>
            <tr className="py-10 border-b border-gray-200  text-gray-700 text-center">
              <td className="px-4 py-4">Ahmed Anwer</td>
              <td className="px-4 py-4">Kurunegela</td>
              <td className="px-4 py-4">10</td>
              <td className="px-4 py-4">22/07/2024</td>
              <td className="px-4 py-4">Rs. 1000.00</td>
              <td className="px-5 py-5 text-sm">
                <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-yellow-900">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-yellow-200 rounded-full opacity-50"
                  ></span>
                  <span className="relative">pending</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
