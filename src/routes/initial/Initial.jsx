import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Initial = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[250px] p-[20px] w-[calc(100%-250px)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Initial;
