import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const products = [
  { id: "P001", name: "Product A", rate: 100, quantity: 5 },
  { id: "P002", name: "Product B", rate: 200, quantity: 8 },
  { id: "P003", name: "Product C", rate: 300, quantity: 3 },
  { id: "P004", name: "Product D", rate: 400, quantity: 6 },
  { id: "P005", name: "Product E", rate: 500, quantity: 10 },
  { id: "P006", name: "Product F", rate: 600, quantity: 12 },
  { id: "P007", name: "Product G", rate: 700, quantity: 14 },
  { id: "P008", name: "Product H", rate: 800, quantity: 16 },
  { id: "P009", name: "Product I", rate: 900, quantity: 18 },
];

const NewOrderModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-11/12 md:w-1/2 lg:w-1/3 h-[80vh] max-h-[80vh] overflow-hidden flex flex-col relative">
        <div className="p-4 bg-gray-100">
          <IoMdCloseCircleOutline
            size={24}
            onClick={handleClose}
            className="absolute top-4 left-4 cursor-pointer"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Order Details</h3>
            <h3 className="p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-xl font-semibold">
              New
            </h3>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-4 space-y-4">
            <div className="flex justify-between">
              <p>
                <strong>User</strong>
              </p>
              <p>Asjedh</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Location</strong>
              </p>
              <p>Colombo</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Mobile No</strong>
              </p>
              <p>0741146366</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Email</strong>
              </p>
              <p>m.asjedh@gmail.com</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Date</strong>
              </p>
              <p>11/11/11</p>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between">
              <p>
                <strong>Total Price</strong>
              </p>
              <p>1000$</p>
            </div>
            <hr className="mt-2" />
          </div>
          <strong>Product List</strong>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Product ID</th>
                  <th className="border border-gray-300 p-2">Product Name</th>
                  <th className="border border-gray-300 p-2">Rate</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2 text-center">
                      {product.id}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {product.rate}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {product.quantity}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      {product.rate * product.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-100 border-t p-4 flex justify-around items-center sticky bottom-0">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
            Pending
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Completed
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderModal;
