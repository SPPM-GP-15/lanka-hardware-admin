import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";
import Stepper from "../stepper/Stepper";

const OrderCard = () => {
  return (
    <div>
      <div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 relative">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-lg font-semibold">Order #0001</div>
              <div className="text-gray-600">July 27, 2002 at 09:44 AM</div>
            </div>
            <div className="flex space-x-2">
              <div className="flex items-center px-3 py-1 border border-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                <IoCloudDownloadSharp className="mr-1" />
                <span>Download</span>
              </div>

              <div className="flex items-center px-3 py-1 border border-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                <MdFileDownloadDone className="mr-1" />
                <span>Completed</span>
              </div>
            </div>
          </div>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
