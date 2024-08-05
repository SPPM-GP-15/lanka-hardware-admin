import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";

function UserCard({ user, onRemove, onBlock }) {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-3xl">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max">
          Id - {user.id}
        </p>
        <div className="flex items-end my-6 space-x-2">
          <p className="text-xl font-bold text-black">{user.username}</p>
        </div>

        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Email</p>
          <div className="flex items-end text-xs text-gray-800">{user.email}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Phone Number</p>
          <div className="flex items-end text-xs text-gray-800">{user.phone}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Date Joined</p>
          <div className="flex items-end text-xs text-gray-800">{user.dateJoined}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Default Address</p>
          <div>
            <p className="flex justify-end text-xs text-gray-800">{user.address}</p>
          </div>
        </div>
        <div className="">
          <div className="text-md flex items-center justify-between pb-1 mb-2 space-x-12 md:space-x-24  border-b border-gray-200">
            <p className="text-md">
              No of orders{" "}
              <div>
                <Link className="text-xs text-blue-500" to={`/orders/${user.id}`}>
                  View purchased orders
                </Link>
              </div>
            </p>

            <div className="flex items-end text-md font-bold bg-green-50 p-1 text-green-800 rounded-xl">
              {user.totalOrders}
            </div>
          </div>

          <div className="text-md flex items-center justify-between pb-2  space-x-12 md:space-x-24">
            <p>No of Items Purchased</p>
            <div className="flex items-end text-md font-bold bg-blue-100 rounded-xl p-1 text-bl">
              {user.itemsPurchased}
            </div>
          </div>
          <div className="text-md flex items-center justify-between pb-2  space-x-12 md:space-x-24">
            <p>Total Earnings</p>
            <div className="flex items-end text-md font-bold rounded-xl p-1 bg-gray-100">
              Rs. {user.totalEarnings}
            </div>
          </div>
          <button
            type="button"
            className="text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-1 text-center mt-4"
            onClick={() => {
              confirmAlert({
                title: "Confirm to delete",
                message: `Are you sure you want to delete this user named ${user.username}?`,
                buttons: [
                  {
                    label: "Yes",
                    onClick: () => onRemove(user.id),
                  },
                  {
                    label: "No",
                    onClick: () => {},
                  },
                ],
              });
            }}
          >
            Block User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
