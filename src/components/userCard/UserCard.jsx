import React from "react";

function UserCard({ user, onBlock }) {
  return (
    <div className="w-full">
      <div className="relative w-full px-4 py-6 bg-white shadow-xl rounded-3xl">
        <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max">
          Id - {user._id}
        </p>
        <div className="flex items-end my-6 space-x-2">
          <p className="text-xl font-bold text-black">{user.name}</p>
        </div>

        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Email</p>
          <div className="flex items-end text-xs text-gray-800">{user.email}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Phone Number</p>
          <div className="flex items-end text-xs text-gray-800">{user.phoneNumber}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Date Joined</p>
          <div className="flex items-end text-xs text-gray-800">{new Date(user.createdAt).toLocaleDateString()}</div>
        </div>
        <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
          <p>Default Address</p>
          <div>
            <p className="flex justify-end text-xs text-gray-800">
              {user.addresses && user.addresses.length > 0
                ? `${user.addresses[0].addressLine}, ${user.addresses[0].city}, ${user.addresses[0].zip}, ${user.addresses[0].country}`
                : 'No address available'}
            </p>
          </div>
        </div>

        {/* Button aligned to the right below the address section */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => onBlock(user._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Block
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
