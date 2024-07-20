import React from "react";

const DashboardCard = ({ cardDetails }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {cardDetails.map(
        ({
          id,
          title,
          value,
          topIcon: TopIcon,
          bottomIcon: BottomIcon,
          desc,
          topIconColor,
          bottomIconColor,
        }) => (
          <div
            key={id}
            className="w-[300px] bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
              <TopIcon className={`${topIconColor}`} size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{value}</h1>
            <div className="flex items-center mt-4">
              <BottomIcon className={`${bottomIconColor} text-xl mr-2`} />
              <h1 className="text-sm text-gray-600">{desc}</h1>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DashboardCard;
