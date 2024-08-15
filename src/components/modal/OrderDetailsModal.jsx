import React from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";

const OrderDetailsModal = ({ open, handleClose, order }) => {
  if (!order) return null;

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Completed":
        return "bg-green-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleButtonClick = async (newStatus) => {
    try {
      const response = await axios.put(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders/${order._id}/status`,
        { status: newStatus }
      );

      console.log("Order updated successfully:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        open ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="bg-white rounded-xl w-[600px] h-[80vh] max-h-[80vh] overflow-hidden flex flex-col relative">
        <div className="p-4 bg-gray-100 relative">
          <MdClose
            size={24}
            onClick={handleClose}
            className="absolute top-4 right-4 cursor-pointer"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Order Details</h3>
            <h3
              className={`p-2 rounded-xl font-semibold ${getStatusClass(
                order.status
              )}`}
            >
              {order.status}
            </h3>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-4 space-y-4">
            {/* Order details */}
            <div className="flex justify-between">
              <p>
                <strong>User</strong>
              </p>
              <p>{order.user ? order.user.name : "N/A"}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Phone Number</strong>
              </p>
              <p>{order.user?.phoneNumber || "N/A"}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Location</strong>
              </p>
              <p>{order.user?.addresses?.[0]?.city || "N/A"}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Email</strong>
              </p>
              <p>{order.user?.email || "N/A"}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Date</strong>
              </p>
              <p>{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Total Price</strong>
              </p>
              <p>{`Rs. ${order.totalAmount.toFixed(2)}`}</p>
            </div>
            <hr className="mt-2" />
          </div>
          <strong>Product List</strong>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Product Name</th>
                  <th className="border border-gray-300 p-2">Price</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-100">
                    {item.product && (
                      <>
                        <td className="border border-gray-300 p-2 text-center">
                          {item.product.name}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {`Rs. ${item.product.newPrice.toFixed(2)}`}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {item.quantity}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          {`Rs. ${(
                            item.product.newPrice * item.quantity
                          ).toFixed(2)}`}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-100 border-t p-4 flex justify-around items-center sticky bottom-0">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick("New")}
          >
            New
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600"
            onClick={() => handleButtonClick("Pending")}
          >
            Pending
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={() => handleButtonClick("Completed")}
          >
            Completed
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            onClick={() => handleButtonClick("Cancelled")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
