// src/components/User.js
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import UserCard from "../../components/userCard/UserCard";
import { getAllUsers, updateUser } from '../../api/api';

const User = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.users);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUsers();
    document.title = 'Users | Lanka Hardwarehub';
  }, []);

  const handleRemove = (userId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setUsers(users.filter((user) => user._id !== userId));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  const handleBlock = (userId) => {
    // Implement blocking logic here
    console.log(`Blocking user with ID: ${userId}`);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-600 mt-2 mb-5">
          Registered Users
        </div>
        <div className="mb-1 ml-2 text-xs text-gray-500">
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
            key={user._id}
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
