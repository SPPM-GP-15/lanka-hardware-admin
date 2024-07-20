import React from "react";

const Stepper = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center">
        <div className="step flex items-center">
          <div className="step-icon bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            1
          </div>
          <div className="step-label ml-2">Placed</div>
        </div>
        <div className="step-separator flex-1 h-1 bg-blue-500 mx-2"></div>
        <div className="step flex items-center">
          <div className="step-icon bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            2
          </div>
          <div className="step-label ml-2">Processed</div>
        </div>
        <div className="step-separator flex-1 h-1 bg-gray-300 mx-2"></div>
        <div className="step flex items-center">
          <div className="step-icon bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
            3
          </div>
          <div className="step-label ml-2">Shipped</div>
        </div>
        <div className="step-separator flex-1 h-1 bg-gray-300 mx-2"></div>
        <div className="step flex items-center">
          <div className="step-icon bg-gray-300 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
            4
          </div>
          <div className="step-label ml-2">Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
