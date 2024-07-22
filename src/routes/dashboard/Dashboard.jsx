import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/dashboardCards/DashboardCard";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

import RecentOrders from "../../components/dashboardCards/RecentOrders";
import TopSummary from "../../components/dashboardCards/TopSummary";
import NewUsers from "../../components/dashboardCards/NewUsers";
import RecentProducts from "../../components/dashboardCards/RecentProducts";
import NewOrderAlert from "../../components/dashboardCards/NewOrderAlert";

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
  useEffect(() => {
    document.title = "Dashboard | Lanka Hardwarehub";
  }, []);

  const cardDetailsSets = [
    [cardDetails[0]],
    [cardDetails[1]],
    [cardDetails[2]],
    [cardDetails[3]],
    [cardDetails[4]],
    [cardDetails[5]],
  ];

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6 p-6">
      <NewOrderAlert isVisible={isVisible} handleClose={handleClose} />

      <div className="flex items-center justify-between  sm:space-x-12 ">
        <div className={`${isVisible ? "mt-9" : "mt-4"}`}>
          <h1 className="text-4xl font-semibold text-gray-800">
            Welcome to Admin Dashboard
          </h1>
          <h2 className="text-gray-400 text-md">
            Here's what's happening with our hardware in summary.
          </h2>
        </div>
      </div>
      <TopSummary />

      <div className="flex flex-col  w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row mt-14">
        <div className="flex w-full space-x-4">
          <RecentOrders />
          <NewUsers />
        </div>
      </div>
      <RecentProducts />

      <div className="p-4 placeholder:">
        <div className="flex flex-wrap gap-20 justify-center items-center">
          {cardDetailsSets.map((cardDetails, index) => (
            <div key={index} className="w-1/4">
              <DashboardCard cardDetails={cardDetails} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
