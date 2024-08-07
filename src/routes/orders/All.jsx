import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import OrderDetailsModal from "../../components/modal/OrderDetailsModal";

function All() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [ordersPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    document.title = "All Orders | Lanka Hardwarehub";
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders`
      );
      setOrders(response.data);
      setPageCount(Math.ceil(response.data.length / ordersPerPage));
    } catch (error) {
      setError("Error fetching orders.");
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const currentOrders = orders.slice(
    currentPage * ordersPerPage,
    (currentPage + 1) * ordersPerPage
  );

  return (
    <div className="py-8">
      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          {loading && <p className="text-center">Loading orders...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && (
            <>
              <table className="w-full border border-collapse table-auto">
                <thead>
                  <tr className="text-base font-bold bg-gray-50 text-center">
                    <th className="px-4 py-3 border-b-2">User</th>
                    <th className="px-4 py-3 border-b-2">Location</th>
                    <th className="px-4 py-3 border-b-2">Qty</th>
                    <th className="px-4 py-3 border-b-2">Date</th>
                    <th className="px-4 py-3 border-b-2">Total Price</th>
                    <th className="px-4 py-3 border-b-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-normal bg-white">
                  {currentOrders.length > 0 ? (
                    currentOrders.map((order) => (
                      <tr
                        key={order._id}
                        className="py-10 border-b border-gray-200 hover:bg-gray-100 cursor-pointer text-gray-700 hover:text-black text-center"
                        onClick={() => handleRowClick(order)}
                      >
                        <td className="px-4 py-4">
                          {order.user ? order.user.name : "N/A"}
                        </td>
                        <td className="px-4 py-4">
                          {order.user ? order.user.location : "N/A"}
                        </td>
                        <td className="px-4 py-4">
                          {order.items.reduce(
                            (sum, item) => sum + item.quantity,
                            0
                          )}
                        </td>
                        <td className="px-4 py-4">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4">
                          Rs. {order.totalAmount.toFixed(2)}
                        </td>
                        <td className="px-5 py-5 text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span
                              aria-hidden="true"
                              className={`absolute inset-0 ${
                                order.status === "New"
                                  ? "bg-blue-400"
                                  : order.status === "Pending"
                                  ? "bg-yellow-400"
                                  : order.status === "Completed"
                                  ? "bg-green-200"
                                  : "bg-red-400"
                              } rounded-full opacity-50`}
                            ></span>
                            <span className="relative">{order.status}</span>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-4 text-center">
                        No orders available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="flex justify-center py-5">
                <ReactPaginate
                  previousLabel={<span className="arrow">&#8592;</span>}
                  nextLabel={<span className="arrow">&#8594;</span>}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  containerClassName={"flex space-x-2"}
                  pageClassName={"flex items-center"}
                  pageLinkClassName={
                    "bg-white text-black px-3 rounded-lg border border-black"
                  }
                  previousClassName={"flex items-center"}
                  previousLinkClassName={
                    "bg-white text-black px-3 rounded border border-black"
                  }
                  nextClassName={"flex items-center"}
                  nextLinkClassName={
                    "bg-white text-black px-3 rounded border border-black"
                  }
                  breakClassName={"flex items-center"}
                  breakLinkClassName={
                    "bg-white text-black px-3 rounded border border-black"
                  }
                  activeClassName={"bg-gray-500 text-white p-1 rounded"}
                  disabledClassName={"text-black cursor-not-allowed"}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <OrderDetailsModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        order={selectedOrder}
      />
    </div>
  );
}

export default All;
