import  { useState } from 'react';
import ReactPaginate from 'react-paginate';

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
    setStockQuantity(prevQuantity => Math.max(0, prevQuantity + amount));
  };

  const toggleStockStatus = () => {
    setIsInStock(!isInStock);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Product Management</h1>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products"
          className="border rounded p-2 w-full mb-4"
        />
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border rounded p-2">
              <option value="">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <select className="border rounded p-2">
              <option value="">All Stock Status</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
            <select className="border rounded p-2">
              <option value="">All Manufacturers</option>
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
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
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
          <h2 className="text-xl font-bold mb-2">Product Name</h2>
          <p className="text-gray-600 mb-2">Product Description</p>
          <p className="text-gray-600 mb-2">Category</p>
          <p className={`font-semibold mb-2 ${true ? 'text-green-500' : 'text-red-500'}`}>
            {true ? 'In Stock' : 'Out of Stock'}
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
        onClick={handleCloseModal} 
        className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6">Manage Product</h2>
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
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                value={productDetails.name} 
                onChange={handleInputChange} 
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={productDetails.description}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Price (Rs)</label>
              <input 
                type="number" 
                name="price" 
                value={productDetails.price} 
                onChange={handleInputChange} 
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Discount %</label>
              <input 
                type="number" 
                name="discountPercentage" 
                value={productDetails.discountPercentage} 
                onChange={handleInputChange} 
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
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
              <label className="block text-gray-700 mb-2">Manufacturer</label>
              <input 
                type="text" 
                name="manufacturer" 
                value={productDetails.manufacturer} 
                onChange={handleInputChange} 
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 mb-2">Stock Quantity</label>
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
          className="ml-4 w-full py-2 px-4 rounded bg-gray-500 text-white"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Product;
