import React, { useEffect, useState } from "react";

import RecentOrders from "../../components/dashboardCards/RecentOrders";
import TopSummary from "../../components/dashboardCards/TopSummary";
import NewUsers from "../../components/dashboardCards/NewUsers";
import RecentProducts from "../../components/dashboardCards/RecentProducts";
import NewOrderAlert from "../../components/dashboardCards/NewOrderAlert";
import axios from "axios";

const Dashboard = () => {
  const [newOrders, setNewOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState("00");
  const [noOfProducts, setNoOfProducts] = useState(0);

  useEffect(() => {
    document.title = "Dashboard | Lanka Hardwarehub";
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders?status=New`
        );

        const responseCompleted = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders?status=New`
        );

        const incomeResponse = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders/income/total`
        );
        const productsCountResponse = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/products`
        );

        setNoOfProducts(productsCountResponse.data.length);
        setTotalAmount(incomeResponse.data.totalIncome);

        if (Array.isArray(response.data)) {
          setNewOrders(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }

        if (Array.isArray(responseCompleted.data)) {
          setCompletedOrders(responseCompleted.data);
        } else {
          console.error("Unexpected response format:", responseCompleted.data);
        }
      } catch (error) {
        console.error("Error fetching new orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      {newOrders.length > 0 && (
        <NewOrderAlert isVisible={isVisible} handleClose={handleClose} />
      )}

      <div className="flex items-center justify-between  sm:space-x-12 ">
        <div className={`${isVisible ? "mt-9" : "mt-4"}`}>
          <h1 className="text-4xl font-semibold text-gray-800 ">
            Welcome to Admin Dashboard
          </h1>
          <h2 className="text-gray-400 text-md">
            Here's what's happening with our hardware in summary.
          </h2>
        </div>
      </div>
      <TopSummary
        newOrders={newOrders}
        completedOrders={completedOrders}
        totalAmount={totalAmount}
        noOfProducts={noOfProducts}
      />

      <div className="flex flex-col  w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row mt-14">
        <div className="flex w-full space-x-4">
          <RecentOrders />
          <NewUsers />
        </div>
      </div>
      <RecentProducts />
    </div>
  );
};

export default Dashboard;
