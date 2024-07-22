import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { PaperClipIcon } from "@heroicons/react/24/outline";

const Initial = () => {
  return (
    <div>
      <div className="flex max-md:hidden h-screen">
        <Sidebar />
        <div className="ml-[250px]  w-[calc(100%-250px)] overflow-y-auto bg-slate-50 ">
          <Outlet />
        </div>
      </div>
      <div className="md:hidden flex justify-center mt-32">
        <div class="flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100  rounded-lg shadow-md">
          <PaperClipIcon className="w-12 h-12  text-gray-700" />
          <h3 class="text-xl font-medium mt-4 text-gray-700 ">
            Not Supported on Mobile View
          </h3>
          <p class="text-gray-500 mt-2">
            The website you are looking was not build for mobile view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Initial;
