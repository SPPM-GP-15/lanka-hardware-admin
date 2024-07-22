import React from "react";
import { Link } from "react-router-dom";

function RecentProducts() {
  return (
    <div className="flex flex-col  w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row mt-12">
      <div className="flex w-full space-x-4">
        <div className="w-full  shadow-lg rounded-xl  h-fit">
          <div className="relative w-full px-4 py-6 bg-white shadow-lg  rounded-xl">
            <div className="flex items-center justify-between  sm:space-x-12 ">
              <div className="text-2xl font-bold text-gray-700 mb-4 ml-2">
                Recently Updated Products
              </div>
              <Link
                to="/products"
                className="text-xs text-blue-500 hover:text-blue-600 hover:border-b hover:border-blue-300"
              >
                View all products
              </Link>
            </div>
            <table class="w-full rounded-full table-auto">
              <thead class="text-sm ">
                <tr class="text-base font-bold  bg-gray-50 text-center">
                  <th class="px-4 py-3 border-b-2 ">Image</th>
                  <th class="px-4 py-3 border-b-2 ">Title</th>
                  <th class="px-4 py-3 border-b-2 ">Description</th>
                  <th class="px-4 py-3 border-b-2 ">Catergory</th>
                  <th class="px-4 py-3 border-b-2 ">Old Price</th>
                  <th class="px-4 py-3 border-b-2 ">New Price</th>
                  <th class="px-4 py-3 border-b-2 ">Stock</th>
                </tr>
              </thead>
              <tbody class="text-sm font-normal  bg-white">
                <tr class="py-10 border-b border-gray-200  text-gray-700 text-center">
                  <td class="px-4 py-4">
                    <img
                      width={60}
                      height={60}
                      alt="product-image"
                      className="rounded-xl object-cover ml-auto mr-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg"
                    />
                  </td>
                  <td class="px-4 py-4 ">Paint bucket</td>
                  <td class="px-4 py-4 w-3/12">
                    asdadasdasd asd ad as dasd a as as sadasd as da dasd asd as
                    asd asd sa dasd asd asd asasd asd
                  </td>
                  <td class="px-4 py-4">Electronics</td>
                  <td class="px-4 py-4">Rs. 1200.00</td>
                  <td class="px-4 py-4">Rs. 1000.00</td>
                  <td class="px-5 py-5 text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">100</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProducts;
