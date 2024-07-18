import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Initial = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Initial Component</h1>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Initial;
