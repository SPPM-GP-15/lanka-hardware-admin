import React from "react";
import { Link } from "react-router-dom";

function NewUsers() {
  return (
    <div className="w-2/6  shadow-lg rounded-xl  h-fit">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
        <div className="flex items-center justify-between  sm:space-x-12 ">
          <div className="text-2xl font-bold text-gray-700 mb-4 ml-2">
            New users
          </div>
          <Link
            to="/users"
            className="text-xs text-blue-500 hover:text-blue-600 hover:border-b hover:border-blue-300"
          >
            View all users
          </Link>
        </div>
        <div className="border-b border-gray-300 my-3 pb-1">
          <p className="text-sm text-gray-700 mb-1">Name - Ahmed Anwer</p>
          <p className="text-xs text-gray-700 mb-1">
            Email - ahmedanwer0094@gmail.com
          </p>
          <p className="text-xs text-gray-700 mb-1">Phone - 0768242884</p>
        </div>
        <div className="border-b border-gray-300 my-3 pb-1">
          <p className="text-sm text-gray-700 mb-1">Name - Ahmed Anwer</p>
          <p className="text-xs text-gray-700 mb-1">
            Email - ahmedanwer0094@gmail.com
          </p>
          <p className="text-xs text-gray-700 mb-1">Phone - 0768242884</p>
        </div>
        <div className="border-b border-gray-300 my-3 pb-1">
          <p className="text-sm text-gray-700 mb-1">Name - Ahmed Anwer</p>
          <p className="text-xs text-gray-700 mb-1">
            Email - ahmedanwer0094@gmail.com
          </p>
          <p className="text-xs text-gray-700 mb-1">Phone - 0768242884</p>
        </div>
      </div>
    </div>
  );
}

export default NewUsers;
