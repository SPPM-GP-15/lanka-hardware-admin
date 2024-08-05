import React from "react";

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

        
      </div>
    </div>
  );
}

export default UserCard;
