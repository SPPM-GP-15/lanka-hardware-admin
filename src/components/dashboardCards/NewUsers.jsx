import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/getAllUsers`
        );
        const sortedUsers = response.data.users.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setUsers(sortedUsers.slice(0, 8));
      } catch (error) {
        console.error("Error fetching new orders:", error);
      }
    };
    fetchUsers();
  }, []);

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
        {users.map((user, index) => (
          <div className="border-b border-gray-300 my-3 pb-1" key={index}>
            <p className="text-sm text-gray-700 mb-1">Name - {user.name}</p>
            <p className="text-xs text-gray-700 mb-1">Email - {user.email}</p>
            <p className="text-xs text-gray-700 mb-1">
              Phone - {user.phoneNumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewUsers;
