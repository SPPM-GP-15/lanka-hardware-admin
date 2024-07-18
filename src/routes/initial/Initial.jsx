import React from "react";
import { Outlet } from "react-router-dom";

const Initial = () => {
  return (
    <div>
      <h1>Initial Component</h1>
      <Outlet />
    </div>
  );
};

export default Initial;
