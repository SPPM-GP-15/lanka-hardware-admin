import React, { useEffect } from "react";

const PostProducts = () => {
  useEffect(() => {
    document.title = "Add Product | Lanka Hardwarehub";
  }, []);
  return (
    <div className="flex items-center flex-col">
      <div className="py-4 px-12 rounded-2xl bg-slate-400">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
            Product Details
          </h2>
          <div className="mt-10 grid grid-cols-6 gap-x-6 gap-y-8">
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-md"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Category
              </label>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-md"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="text"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  shadow-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="stock"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Stock Available
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  shadow-md"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="variants"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Variants
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="variants"
                  id="variants"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-md"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Description
              </label>
              <div className="mt-2">
                <textarea
                  name="description"
                  id="description"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 shadow-md"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="image-upload"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Images
              </label>
              <div className="mt-2 flex flex-col space-y-2">
                <input
                  type="file"
                  name="image-upload-1"
                  id="image-upload-1"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="file"
                  name="image-upload-2"
                  id="image-upload-2"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="file"
                  name="image-upload-3"
                  id="image-upload-3"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-blue-700 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProducts;
