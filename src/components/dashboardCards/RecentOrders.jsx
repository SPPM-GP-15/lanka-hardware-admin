import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders`
        );
        const sortedOrders = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setOrders(sortedOrders.slice(0, 8));
      } catch (error) {
        console.error("Error fetching new orders:", error);
      }
    };
    fetchOrders();
  }, []);
  return (
    <div className="w-4/6  shadow-lg rounded-xl  h-fit">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
        <div className="flex items-center justify-between  sm:space-x-12 ">
          <div className="text-2xl font-bold text-gray-700 mb-4 ml-2">
            Recent Orders
          </div>
          <Link
            to="/orders/all"
            className="text-xs text-blue-500 hover:text-blue-600 hover:border-b hover:border-blue-300"
          >
            View all orders
          </Link>
        </div>
        <table className="w-full rounded-full table-auto">
          <thead className="text-sm ">
            <tr className="text-base font-bold  bg-gray-50 text-center">
              <th className="px-4 py-3 border-b-2 ">User</th>
              <th className="px-4 py-3 border-b-2 ">Location - City</th>
              <th className="px-4 py-3 border-b-2 ">No of Items</th>
              <th className="px-4 py-3 border-b-2 ">Date</th>
              <th className="px-4 py-3 border-b-2 ">Total Price</th>
              <th className="px-4 py-3 border-b-2 ">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal  bg-white">
            {orders.map((item, index) => (
              <tr
                className="py-10 border-b border-gray-200  text-gray-700 text-center"
                key={index}
              >
                <td className="px-4 py-4">{item.user.name}</td>
                <td className="px-4 py-4">
                  {item.user.address ? item.user.address.city : "N/A"}
                </td>
                <td className="px-4 py-4">
                  {item.items.reduce((sum, item) => sum + item.quantity, 0)}
                </td>
                <td className="px-4 py-4">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-4">Rs. {item.totalAmount}.00</td>
                <td className="px-5 py-5 text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 ${
                        item.status === "New"
                          ? "bg-blue-400 text-blue-950"
                          : item.status === "Pending"
                          ? "bg-yellow-400 text-yellow-950"
                          : item.status === "Completed"
                          ? "bg-green-200 text-green-950"
                          : "bg-red-400 text-red-950"
                      } rounded-full opacity-50`}
                    ></span>
                    <span
                      className={`relative ${
                        item.status === "New"
                          ? "text-blue-950"
                          : item.status === "Pending"
                          ? "text-yellow-950"
                          : item.status === "Completed"
                          ? "text-green-950"
                          : "text-red-950"
                      } `}
                    >
                      {item.status}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
