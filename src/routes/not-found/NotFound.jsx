import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Lanka Hardwarehub";
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img
        className="w-1/2 md:1/3 lg:w-1/4 text-blue-600"
        src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
      />

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          Page Not Found
        </p>
        <p className="text-md  text-gray-600 mt-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-gray-100 px-4 py-2 mt-12  transition duration-150"
          title="Return Home"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
