import React from "react";
import OrderCard from "../../components/orderCard/OrderCard";

const Orders = () => {
  return (
    <div>
      <div className="flex gap-3 mb-4">
        <div className="px-4 py-2 border border-gray-900 rounded-lg cursor-pointer hover:bg-gray-200">
          Completed
        </div>
        <div className="px-4 py-2 border border-gray-900 rounded-lg cursor-pointer hover:bg-gray-200">
          On Progress
        </div>
      </div>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default Orders;
