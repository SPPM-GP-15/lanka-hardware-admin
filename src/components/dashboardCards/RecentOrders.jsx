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
        <table class="w-full rounded-full table-auto">
          <thead class="text-sm ">
            <tr class="text-base font-bold  bg-gray-50 text-center">
              <th class="px-4 py-3 border-b-2 ">User</th>
              <th class="px-4 py-3 border-b-2 ">Location</th>
              <th class="px-4 py-3 border-b-2 ">Qty</th>
              <th class="px-4 py-3 border-b-2 ">Date</th>
              <th class="px-4 py-3 border-b-2 ">Total Price</th>
              <th class="px-4 py-3 border-b-2 ">Status</th>
            </tr>
          </thead>
          <tbody class="text-sm font-normal  bg-white">
            <tr class="py-10 border-b border-gray-200  text-gray-700 text-center">
              <td class="px-4 py-4">Ahmed Anwer</td>
              <td class="px-4 py-4">Kurunegela</td>
              <td class="px-4 py-4">10</td>
              <td class="px-4 py-4">22/07/2024</td>
              <td class="px-4 py-4">Rs. 1000.00</td>
              <td class="px-5 py-5 text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                  <span
                    aria-hidden="true"
                    class="absolute inset-0 bg-blue-200 rounded-full opacity-50"
                  ></span>
                  <span class="relative">new</span>
                </span>
              </td>
            </tr>
            <tr class="py-10 border-b border-gray-200  text-gray-700 text-center">
              <td class="px-4 py-4">Ahmed Anwer</td>
              <td class="px-4 py-4">Kurunegela</td>
              <td class="px-4 py-4">10</td>
              <td class="px-4 py-4">22/07/2024</td>
              <td class="px-4 py-4">Rs. 1000.00</td>
              <td class="px-5 py-5 text-sm">
                <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-yellow-900">
                  <span
                    aria-hidden="true"
                    class="absolute inset-0 bg-yellow-200 rounded-full opacity-50"
                  ></span>
                  <span class="relative">pending</span>
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
