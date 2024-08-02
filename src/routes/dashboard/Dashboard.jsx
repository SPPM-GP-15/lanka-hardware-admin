import React from "react";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import barChart from "../../assets/barchart.jpeg";
import pieChart from "../../assets/piechart.png";

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
    <div>
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
