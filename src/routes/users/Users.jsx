import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserCard from "../../components/userCard/UserCard";
import axios from "axios";

const User = () => {
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
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching new orders:", error);
      }
    };
    fetchUsers();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleRemove = (userId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setUsers(users.filter((user) => user.id !== userId));
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleBlock = (userId) => {
    setUsers(
      users.map((user) =>
        user._id === userId ? { ...user, blocked: true } : user
      )
    );
  };

  useEffect(() => {
    document.title = "Users | Lanka Hardwarehub";
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-600 mt-2 mb-5">
          Registered Users
        </div>
        <div className="mb-1 ml-2 text-xs text-gray-500 ">
          {filteredUsers.length} users found
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onRemove={handleRemove}
            onBlock={handleBlock}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
