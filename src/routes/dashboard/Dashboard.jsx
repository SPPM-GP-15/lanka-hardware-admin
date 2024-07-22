import React from "react";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import barChart from "../../assets/barchart.jpeg";
import pieChart from "../../assets/piechart.png";
import { MdEmail } from "react-icons/md";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const cardDetails = [
  {
    id: 1,
    title: "BUDGET",
    value: "$24K",
    topIcon: BiSolidBadgeDollar,
    bottomIcon: FaArrowUpShortWide,
    desc: "Since last month",
    topIconColor: "text-red-500",
    bottomIconColor: "text-green-500",
  },
  {
    id: 2,
    title: "TOTAL CUSTOMERS",
    value: "1.6K",
    topIcon: FaUsers,
    bottomIcon: FaArrowDownWideShort,
    desc: "Since last month",
    topIconColor: "text-blue-500",
    bottomIconColor: "text-yellow-500",
  },
  {
    id: 3,
    title: "NEW ORDERS",
    value: "1.0K",
    topIcon: IoMdCart,
    bottomIcon: FaArrowDownWideShort,
    desc: "Since last month",
    topIconColor: "text-green-500",
    bottomIconColor: "text-purple-500",
  },
  {
    id: 4,
    title: "BUDGET",
    value: "$24K",
    topIcon: BiSolidBadgeDollar,
    bottomIcon: FaArrowUpShortWide,
    desc: "Since last month",
    topIconColor: "text-red-500",
    bottomIconColor: "text-green-500",
  },
  {
    id: 5,
    title: "TOTAL CUSTOMERS",
    value: "1.6K",
    topIcon: FaUsers,
    bottomIcon: FaArrowDownWideShort,
    desc: "Since last month",
    topIconColor: "text-blue-500",
    bottomIconColor: "text-yellow-500",
  },
  {
    id: 6,
    title: "NEW ORDERS",
    value: "1.0K",
    topIcon: IoMdCart,
    bottomIcon: FaArrowDownWideShort,
    desc: "Since last month",
    topIconColor: "text-green-500",
    bottomIconColor: "text-purple-500",
  },
];
const Dashboard = () => {
  const cardDetailsSets = [
    [cardDetails[0]],
    [cardDetails[1]],
    [cardDetails[2]],
    [cardDetails[3]],
    [cardDetails[4]],
    [cardDetails[5]],
  ];
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      <div className="flex items-center justify-between  sm:space-x-12 ">
        <div className="mt-6">
          <h1 className="text-4xl font-semibold text-gray-800">
            Welcome to Admin Dashboard
          </h1>
          <h2 className="text-gray-400 text-md">
            Here's what's happening with our hardware in summary.
          </h2>
        </div>

        <Link
          to={"/orders/new"}
          class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 "
        >
          <span class="">New orders</span>
          <div class="absolute inline-flex items-center justify-center w-8 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-2 -start-2">
            10
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <div className="w-6/12 flex items-center shadow-lg rounded-lg  transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="relative w-full overflow-hidden bg-white shadow-lg rounded-xl">
            <div className="block w-full h-full">
              <div className="flex items-center justify-between px-4 py-7 space-x-4 ">
                <div className="flex items-center">
                  <span className="relative p-5 bg-yellow-100 rounded-full">
                    <CurrencyDollarIcon className="absolute h-7 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                  </span>
                  <p className="ml-2 text-sm font-semibold text-gray-700 ">
                    Total Earnings
                  </p>
                </div>
                <div className="mt-6 text-lg font-bold text-black border-b border-gray-200 md:mt-0">
                  Rs. 2,000,000.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full space-x-4 md:w-1/2">
          <div className="w-1/2  shadow-lg rounded-lg  transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
              <p className="text-xl font-bold text-black flex items-end">
                1200
              </p>
              <p className="text-sm text-gray-400">No of Products In Shop</p>
            </div>
          </div>
          <div className="w-1/2  shadow-lg rounded-lg  transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
              <p className="text-xl font-bold text-black flex items-end">asd</p>
              <p className="text-sm text-gray-400">
                Number of Orders Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 placeholder:">
        <div className="flex flex-wrap gap-20 justify-center items-center">
          {cardDetailsSets.map((cardDetails, index) => (
            <div key={index} className="w-1/4">
              <DashboardCard cardDetails={cardDetails} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-32 mt-8 justify-center items-center mb-10">
          <div className="w-1/2 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
            <div className=" rounded-lg flex items-center justify-center">
              <img
                src={barChart}
                alt="Bar Chart"
                className="w-[350px] h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-1/4 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
            <div className="  rounded-lg flex items-center justify-center">
              <img
                src={pieChart}
                alt="Pie Chart"
                className="w--[200px] h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
