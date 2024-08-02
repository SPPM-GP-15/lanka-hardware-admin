import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import UserCard from "../../components/userCard/UserCard";
import { MdEmail } from "react-icons/md";

const User = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john_doe",
      address: "123 Main St",
      phone: "555-1234",
      totalOrders: 5,
    },
    {
      id: 2,
      username: "jane_doe",
      address: "456 Elm St",
      phone: "555-5678",
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

  useEffect(() => {
    document.title = "Users | Lanka Hardwarehub";
  }, []);

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-600 mt-2 mb-5">
          Registered Users
        </div>
        <div className="mb-1 ml-2 text-xs text-gray-500 ">123 users found</div>
      </div>

      <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default User;
