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
            <table className="w-full rounded-full table-auto">
              <thead className="text-sm ">
                <tr className="text-base font-bold  bg-gray-50 text-center">
                  <th className="px-4 py-3 border-b-2 ">Image</th>
                  <th className="px-4 py-3 border-b-2 ">Title</th>
                  <th className="px-4 py-3 border-b-2 ">Description</th>
                  <th className="px-4 py-3 border-b-2 ">Catergory</th>
                  <th className="px-4 py-3 border-b-2 ">Old Price</th>
                  <th className="px-4 py-3 border-b-2 ">New Price</th>
                  <th className="px-4 py-3 border-b-2 ">Stock</th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal  bg-white">
                {products.map((product) => (
                  <tr
                    className="py-10 border-b border-gray-200  text-gray-700 text-center"
                    key={product._id}
                  >
                    <td className="px-4 py-4">
                      <img
                        width={60}
                        height={60}
                        alt="product-image"
                        classNameName="rounded-xl object-cover ml-auto mr-auto"
                        src={product.imageUrl}
                      />
                    </td>
                    <td className="px-4 py-4 ">{product.name}</td>
                    <td className="px-4 py-4 w-3/12">{product.description}</td>
                    <td className="px-4 py-4">{product.category.name}</td>
                    <td className="px-4 py-4">
                      Rs. {product.oldPrice ? product.oldPrice : "00.00"}
                    </td>
                    <td className="px-4 py-4">Rs. {product.newPrice}</td>
                    <td className="px-5 py-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 ${
                            product.stock == 0 ? "bg-red-400" : "bg-gray-200"
                          } rounded-full opacity-50`}
                        ></span>
                        <span
                          className={`relative ${
                            product.stock == 0 && "text-red-900"
                          } `}
                        >
                          {product.stock}
                        </span>
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
