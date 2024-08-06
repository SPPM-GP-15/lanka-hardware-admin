import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function NewOrderAlert({ isVisible, handleClose }) {
  return (
    <div
      id="sticky-banner"
      className={`fixed top-0 start-0 z-50 flex justify-between w-full p-2 border-b border-gray-200 bg-gray-200  opacity-90 ${
        !isVisible ? "hidden" : ""
      }`}
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal">
          <span>
            You got new orders{" "}
            <Link
              to="/orders/new"
              className="inline font-medium text-red-600 underline dark:text-red-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
            >
              Accept Order
            </Link>
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5"
          onClick={handleClose}
        >
          <IoMdClose className="w-4 h-4" />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}

export default NewOrderAlert;
