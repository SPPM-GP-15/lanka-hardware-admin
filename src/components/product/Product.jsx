import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IoCloseSharp } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [isInStock, setIsInStock] = useState(true);
  const [productDetails, setProductDetails] = useState({
    name: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    category: '',
    manufacturer: ''
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setStockQuantity(product.stockQuantity);
    setIsInStock(product.isInStock);
    setProductDetails({
      name: product.name,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      category: product.category,
      manufacturer: product.manufacturer
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleStockQuantityChange = (amount) => {
    setStockQuantity(prevQuantity => {
      const newQuantity = Math.max(0, prevQuantity + amount);
      if (newQuantity === 0) {
        setIsInStock(false);
      } else {
        setIsInStock(true);
      }
      return newQuantity;
    });
  };

  const toggleStockStatus = () => {
    setIsInStock(prevStatus => {
      const newStatus = !prevStatus;
      if (!newStatus) {
        setStockQuantity(0); // Set stock quantity to 0 when out of stock
      }
      return newStatus;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl mb-6 text-gray-800">Product Management</h1>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search products"
            className="border rounded p-2 pl-10 w-full"
          />
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <div className="flex items-center mb-4">
            <IoFilterSharp className="text-xl mr-2" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border rounded p-2">
              <option value="">Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <select className="border rounded p-2">
              <option value="">Stock Status</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
            <select className="border rounded p-2">
              <option value="">Manufacturers</option>
              <option value="manufacturer1">Manufacturer 1</option>
              <option value="manufacturer2">Manufacturer 2</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
      {/* Replace this with your product cards */}
          <div
            className="bg-gray-200 rounded-lg shadow-md p-4 cursor-pointer relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleProductClick({ 
              image: "https://via.placeholder.com/150",
              name: "Product Name",
              description: "Product Description",
              price: 100,
              discountPercentage: 10,
              category: "Category",
              manufacturer: "Manufacturer",
              stockQuantity: 20,
              isInStock: true
            })}
          >
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-48 object-cover mb-4" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
            <h2 className="text-xl font-bold mb-2">Product Name</h2>
            <p className="text-gray-600 mb-2">Product Description</p>
            <p className="text-gray-600 mb-2">Category</p>
            <p className={`font-semibold mb-2 ${isInStock ? 'text-green-500' : 'text-red-500'}`}>
                  {isInStock ? 'In Stock' : 'Out of Stock'}
                </p>
            <p className="text-gray-500">Manufacturer</p>
          </div>
          {/* Repeat product cards as needed */}
        </div>
      
      {/* Pagination */}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={10} // Replace with the actual page count
        onPageChange={() => {}} // Replace with the actual page change handler
        containerClassName={'flex justify-center mt-6'}
        pageClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        previousClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        nextClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        activeClassName={'bg-blue-500 text-white'}
      />

      {/* Stock Management Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-3/4 max-w-4xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={handleCloseModal}
            >
              <IoCloseSharp size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Update Products</h2>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-48 object-cover mb-4" 
                />
              </div>
              <div className="md:w-1/2 md:ml-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <label className="block text-gray-700 mb-2">Name - </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={productDetails.name} 
                      onChange={handleInputChange} 
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-gray-700 mb-2">Description -</label>
                    <textarea
                      name="description"
                      value={productDetails.description}
                      onChange={handleInputChange}
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Price (Rs) - </label>
                    <input 
                      type="number" 
                      name="price" 
                      value={productDetails.price} 
                      onChange={handleInputChange} 
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Discount % - </label>
                    <input 
                      type="number" 
                      name="discountPercentage" 
                      value={productDetails.discountPercentage} 
                      onChange={handleInputChange} 
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Category - </label>
                    <select 
                      name="category" 
                      value={productDetails.category} 
                      onChange={handleInputChange} 
                      className="border rounded p-2 w-full"
                    >
                      <option value="">Select Category</option>
                      <option value="Tools">Tools</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Paints">Paints</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Manufacturer - </label>
                    <input 
                      type="text" 
                      name="manufacturer" 
                      value={productDetails.manufacturer} 
                      onChange={handleInputChange} 
                      className="border rounded p-2 w-full"
                      disabled
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 mb-2">Stock Quantity - </label>
                    <div className="flex items-center">
                      <button
                        className="px-3 py-1 bg-gray-300 rounded-l"
                        onClick={() => handleStockQuantityChange(-1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={stockQuantity}
                        onChange={(e) => setStockQuantity(parseInt(e.target.value))}
                        className="border-t border-b border-gray-300 p-2 w-full text-center"
                      />
                      <button
                        className="px-3 py-1 bg-gray-300 rounded-r"
                        onClick={() => handleStockQuantityChange(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                className={`w-full py-2 px-4 rounded ${isInStock ? 'bg-red-500' : 'bg-green-500'} text-white`}
                onClick={toggleStockStatus}
              >
                {isInStock ? 'Out of Stock' : 'In Stock'}
              </button>
              <button
                className="ml-4 w-full py-2 px-4 rounded bg-blue-500 text-white"
                onClick={() => {
                  // handleUpdate(); // Call the update function to save changes
                  handleCloseModal(); // Close the modal after updating
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
