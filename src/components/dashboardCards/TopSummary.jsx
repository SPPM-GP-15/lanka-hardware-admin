import React from "react";

import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { FaHashtag } from "react-icons/fa6";

function TopSummary() {
  return (
    <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
      <div className="w-1/2 flex items-center shadow-lg rounded-xl  transition-transform transform hover:scale-105 hover:shadow-xl cursor-default">
        <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="block w-full h-full">
            <div className="flex items-center justify-start px-3 py-6 space-x-4 ">
              <div className="flex items-center">
                <span className="relative p-5 bg-yellow-100 rounded-full">
                  <CurrencyDollarIcon className="absolute h-7 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
                <div className="w-full rounded-xl ml-5">
                  <div className="mt-6 text-lg font-bold text-black border-b border-gray-200 md:mt-0">
                    Rs. 2,000,000.00
                  </div>
                  <p className="text-sm text-gray-500">Total Earnings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center shadow-lg rounded-xl  transition-transform transform hover:scale-105 hover:shadow-xl cursor-default">
        <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="block w-full h-full">
            <div className="flex items-center justify-start px-2 py-6 space-x-4 ">
              <div className="flex items-center">
                <span className="relative p-5 bg-blue-100 rounded-full">
                  <FaHashtag className="absolute h-7 text-blue-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
                <div className="w-full rounded-xl ml-5">
                  <div className="mt-6 text-lg font-bold text-black border-b border-gray-200 md:mt-0">
                    2000
                  </div>
                  <p className="text-sm text-gray-500">
                    No of Products In Shop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center shadow-lg rounded-xl  transition-transform transform hover:scale-105 hover:shadow-xl cursor-default">
        <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="block w-full h-full">
            <div className="flex items-center justify-start px-2 py-6 space-x-4 ">
              <div className="flex items-center">
                <span className="relative p-5 bg-green-100 rounded-full">
                  <FaHashtag className="absolute h-7 text-green-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
                <div className="w-full rounded-xl ml-5">
                  <div className="mt-6 text-lg font-bold text-black border-b border-gray-200 md:mt-0">
                    123
                  </div>
                  <p className="text-sm text-gray-500">
                    Number of Orders Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center shadow-lg rounded-xl  transition-transform transform hover:scale-105 hover:shadow-xl cursor-default">
        <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="block w-full h-full">
            <div className="flex items-center justify-start px-2 py-6 space-x-4 ">
              <div className="flex items-center">
                <span className="relative p-5 bg-red-100 rounded-md">
                  <CurrencyDollarIcon className="absolute h-7 text-red-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </span>
                <div className="w-full rounded-xl ml-5">
                  <div className="mt-6 text-lg font-bold text-red border-b border-gray-200 md:mt-0">
                    12
                  </div>
                  <p className="text-sm text-gray-500">New Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSummary;
