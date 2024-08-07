import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import OrderDetailsModal from "../../components/modal/OrderDetailsModal";

function New() {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [ordersPerPage] = useState(3);

  const handleOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    document.title = "New Orders | Lanka Hardwarehub";

    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders?status=New`
        );
        console.log(response);

        if (Array.isArray(response.data)) {
          setOrders(response.data);
          setPageCount(Math.ceil(response.data.length / ordersPerPage));
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching new orders:", error);
      }
    };

    fetchOrders();
  }, [ordersPerPage]);

  const currentOrders = orders.slice(
    currentPage * ordersPerPage,
    (currentPage + 1) * ordersPerPage
  );

  return (
    <div className="py-8 ">
      <div className="px-4 py-4 mx-4 overflow-x-auto  ">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
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
                    onClick={() => handleOpen(order)}
                    className="py-10 border-b border-gray-200 hover:bg-gray-100 cursor-pointer text-gray-700 hover:text-black text-center"
                  >
                    <td className="px-4 py-4">
                      {order.user ? order.user.name : "N/A"}
                    </td>
                    <td className="px-4 py-4">
                      {order.user &&
                      order.user.addresses &&
                      order.user.addresses.length > 0
                        ? order.user.addresses[0].city
                        : "N/A"}
                    </td>
                    <td className="px-4 py-4">
                      {order.items.reduce(
                        (total, item) => total + item.quantity,
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
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-blue-900">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-blue-200 rounded-full opacity-50"
                        ></span>
                        <span className="relative">{order.status}</span>
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-4 text-center">
                    No new orders available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-center py-5 bg-white">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
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
                "bg-white text-black p-2 rounded border border-black"
              }
              activeClassName={"bg-gray-500 text-white p-2 rounded"}
              disabledClassName={"text-black cursor-not-allowed"}
            />
          </div>
        </div>
      </div>
      {open && (
        <OrderDetailsModal
          open={open}
          handleClose={handleClose}
          order={selectedOrder}
        />
      )}
    </div>
  );
}

export default New;
