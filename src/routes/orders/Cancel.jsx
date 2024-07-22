import React from "react";

function Cancel() {
  return (
    <div class="py-8">
      <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table class="w-full border border-collapse table-auto">
            <thead class="">
              <tr class="text-base font-bold text-left bg-gray-50">
                <th class="px-4 py-3 border-b-2 ">User</th>
                <th class="px-4 py-3 border-b-2 ">Location</th>
                <th class="px-4 py-3 border-b-2 ">Qty</th>
                <th class="px-4 py-3 border-b-2 ">Date</th>
                <th class="px-4 py-3 border-b-2 ">Total Price</th>
                <th class="px-4 py-3 border-b-2 ">Status</th>
              </tr>
            </thead>
            <tbody class="text-sm font-normal  bg-white">
              <tr class="py-10 border-b border-gray-200 hover:bg-gray-100 cursor-pointer text-gray-700 hover:text-black">
                <td class="px-4 py-4">Ahmed Anwer</td>
                <td class="px-4 py-4">Kurunegela</td>
                <td class="px-4 py-4">10</td>
                <td class="px-4 py-4">22/07/2024</td>
                <td class="px-4 py-4">Rs. 1000.00</td>
                <td class="px-5 py-5 text-sm">
                  <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                    <span
                      aria-hidden="true"
                      class="absolute inset-0 bg-red-200 rounded-full opacity-50"
                    ></span>
                    <span class="relative">cancelled</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
            <div class="flex items-center">
              <button
                type="button"
                class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
              >
                1
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                2
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
              >
                3
              </button>
              <button
                type="button"
                class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                4
              </button>
              <button
                type="button"
                class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  class=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
