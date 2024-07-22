import React from "react";
import { Link } from "react-router-dom";

function UserCard() {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-3xl">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max">
          Id - {"123456"}
        </p>
        <div className="flex items-end my-6 space-x-2">
          <p className="text-xl font-bold text-black">Name</p>
        </div>

        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Email</p>
          <div className="flex items-end text-xs">ahme@gmail.com</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Phone Number</p>
          <div className="flex items-end text-xs">12345</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Default Address</p>
          <div>
            <p className="flex justify-end text-xs">157/1,samodhaya</p>
            <div className="flex justify-end text-xs">Kurunegala</div>
            <div className="flex justify-end text-xs">Sri Lanka</div>
            <div className="flex justify-end text-xs">60000</div>
          </div>
        </div>
        <div className="">
          <div className="text-md flex items-center justify-between pb-1 mb-2 space-x-12 md:space-x-24  border-b border-gray-200">
            <p className="text-md">
              No of orders{" "}
              <div>
                <Link className="text-xs text-blue-500">
                  View purchased orders
                </Link>
              </div>
            </p>

            <div className="flex items-end text-md font-bold bg-green-50 p-1 text-green-800 rounded-xl">
              10
            </div>
          </div>

          <div className="text-md flex items-center justify-between pb-2  space-x-12 md:space-x-24">
            <p>No of Items Purchased</p>
            <div className="flex items-end text-md font-bold bg-blue-100 rounded-xl p-1 text-bl">
              20
            </div>
          </div>
          <div className="text-md flex items-center justify-between pb-2  space-x-12 md:space-x-24">
            <p>Total Earnings</p>
            <div className="flex items-end text-md font-bold rounded-xl p-1 bg-gray-100">
              Rs. 2000000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
