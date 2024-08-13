import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Orders = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Orders | Lanka Hardwarehub";
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders`
        );
        setCount(response.data.length);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container px-4 mx-auto sm:px-8">
      <div className="flex items-center space-x-4 mt-10">
        <div className="text-2xl font-bold text-gray-700 mb-5">Orders</div>
        <div className="mb-3 ml-2 text-xs text-gray-500 ">
          Total {count} orders
        </div>
      </div>

      <div className="flex gap-4">
        <NavLink
          to="all"
          className={({ isActive }) =>
            isActive
              ? "mx-4 py-1 font-medium text-blue-400 border-b-2 border-blue-400"
              : "mx-4 py-1 font-medium"
          }
        >
          All orders
        </NavLink>
        <NavLink
          to="new"
          className={({ isActive }) =>
            isActive
              ? "mx-4 py-1 font-medium text-blue-400 border-b-2 border-blue-400"
              : "mx-4 py-1 font-medium"
          }
        >
          New orders
        </NavLink>
        <NavLink
          to="pending"
          className={({ isActive }) =>
            isActive
              ? "mx-4 py-1 font-medium text-blue-400 border-b-2 border-blue-400"
              : "mx-4 py-1 font-medium"
          }
        >
          Pending
        </NavLink>
        <NavLink
          to="completed"
          className={({ isActive }) =>
            isActive
              ? "mx-4 py-1 font-medium text-blue-400 border-b-2 border-blue-400"
              : "mx-4 py-1 font-medium"
          }
        >
          Completed
        </NavLink>
        <NavLink
          to="cancel"
          className={({ isActive }) =>
            isActive
              ? "mx-4 py-1 font-medium text-blue-400 border-b-2 border-blue-400"
              : "mx-4 py-1 font-medium"
          }
        >
          Cancel
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Orders;
