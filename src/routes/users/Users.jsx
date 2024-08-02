import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'john_doe',
      address: '123 Main St',
      phone: '555-1234',
      totalOrders: 5,
    },
    {
      id: 2,
      username: 'jane_doe',
      address: '456 Elm St',
      phone: '555-5678',
      totalOrders: 3,
    },
    
    {
      id: 3,
      username: 'jane_doe',
      address: '456 Elm St',
      phone: '555-5678',
      totalOrders: 3,
    }
  ]);

  const handleRemove = (userId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setUsers(users.filter(user => user.id !== userId));
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{user.username}</h3>
            <p className="mb-2"><strong>Address:</strong> {user.address}</p>
            <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
            <p className="mb-4"><strong>Total Orders:</strong> {user.totalOrders}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleRemove(user.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
