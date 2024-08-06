import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecentProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/products`
        );
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProducts(sortedProducts.slice(0, 10));
      } catch (error) {
        console.error(
          "Error getting products:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchProducts();
  }, []);

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
                {products.map((product) => (
                  <tr
                    class="py-10 border-b border-gray-200  text-gray-700 text-center"
                    key={product._id}
                  >
                    <td class="px-4 py-4">
                      <img
                        width={60}
                        height={60}
                        alt="product-image"
                        className="rounded-xl object-cover ml-auto mr-auto"
                        src={product.imageUrl}
                      />
                    </td>
                    <td class="px-4 py-4 ">{product.name}</td>
                    <td class="px-4 py-4 w-3/12">{product.description}</td>
                    <td class="px-4 py-4">{product.category.name}</td>
                    <td class="px-4 py-4">
                      Rs. {product.oldPrice ? product.oldPrice : "00.00"}
                    </td>
                    <td class="px-4 py-4">Rs. {product.newPrice}</td>
                    <td class="px-5 py-5 text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">{product.stock}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProducts;
