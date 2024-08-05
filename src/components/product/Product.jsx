import { useState, useEffect } from 'react';
import axios from 'axios';
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
    imageUrl: '',
    price: 0,
    discountPercentage: 0,
    category: '',
    manufacturer: ''
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [stockStatus, setStockStatus] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const applyFilters = () => {
    let filtered = products;
  
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category.name === selectedCategory);
    }
  
    if (stockStatus) {
      filtered = filtered.filter(product => {
        if (stockStatus === 'inStock') return product.stock > 0;
        if (stockStatus === 'outOfStock') return product.stock === 0;
        return true;
      });
    }
  
    setFilteredProducts(filtered);
    setCurrentPage(0); // Reset to first page whenever filters are applied
  };
  

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    setFilteredProducts(filtered);
    setCurrentPage(0); // Reset to first page whenever search is applied
  };
  
  

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };
  
  const handleStockStatusChange = (e) => {
    const status = e.target.value;
    setStockStatus(status);
  };
  

const handleProductClick = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
      const product = response.data;
      setSelectedProduct(product);
      setStockQuantity(product.stock);
      setIsInStock(product.stock > 0);
      setProductDetails({
        name: product.name,
        description: product.description,
        iamgeUrl:product.imageUrl,
        price: product.newPrice,
        discountPercentage: product.discountPercentage,
        category: product.category.name,
        manufacturer: product.manufacturer
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
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
      setIsInStock(newQuantity > 0);
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

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:3000/api/products/${selectedProduct._id}`, {
        ...productDetails,
        stock: stockQuantity,
        isInStock
      });
      fetchProducts();
      handleCloseModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const displayProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setStockStatus('');
    fetchProducts(); // Fetch all products without any filters
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
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded p-2 pl-10 w-full"
          />
          <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {/* Search suggestions dropdown could be implemented here */}
        </div>
        <div className="bg-white p-4 rounded shadow-md mb-4">
          <div className="flex items-center mb-4">
            <IoFilterSharp className="text-xl mr-2" />
            <h2 className="text-xl font-semibold">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              className="border rounded p-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Categories</option>
              {categories.map(category => (
                <option key={category._id} value={category.name}>{category.name}</option>
              ))}
            </select>
            <select
              className="border rounded p-2"
              value={stockStatus}
              onChange={handleStockStatusChange}
            >
              <option value="">Select Stock Status</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>

        </div>
      </div>


      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
        {displayProducts.length > 0 ? (
          displayProducts.map((product) => (
            <div
              key={product._id}
              className="bg-gray-200 rounded-lg shadow-md p-4 cursor-pointer relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleProductClick(product._id)}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-600 mb-2">{product.category.name}</p>
              <p
                className={`font-semibold mb-2 ${
                  product.stock > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="text-gray-500">{product.manufacturer}</p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center mt-6'}
        pageClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        previousClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        nextClassName={'border border-gray-300 rounded-lg p-2 mx-1 cursor-pointer hover:bg-blue-100 transition-colors'}
        activeClassName={'bg-blue-500 text-white'}
      />

      {/* Modal for Product Details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative">
            <IoCloseSharp
              className="absolute top-2 right-2 text-red-300 cursor-pointer hover:text-red-700 text-2xl"
              onClick={handleCloseModal}
            />
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={productDetails.name}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description:</label>
              <textarea
                name="description"
                value={productDetails.description}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Image URL:</label>
              <textarea
                name="description"
                value={productDetails.iamgeUrl}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Price:</label>
              <input
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Discount Percentage:</label>
              <input
                type="number"
                name="discountPercentage"
                value={productDetails.discountPercentage}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Category:</label>
              <input
                type="text"
                name="category"
                value={productDetails.category}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Manufacturer:</label>
              <input
                type="text"
                name="manufacturer"
                value={productDetails.manufacturer}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="block text-gray-700 mr-4">Stock Quantity:</label>
              <button
                className="border border-gray-300 rounded p-2 mr-2"
                onClick={() => handleStockQuantityChange(-1)}
                disabled={stockQuantity <= 0}
              >
                -
              </button>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
                className="border rounded p-2 w-20 text-center"
              />
              <button
                className="border border-gray-300 rounded p-2 ml-2"
                onClick={() => handleStockQuantityChange(1)}
              >
                +
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                <input
                  type="checkbox"
                  checked={isInStock}
                  onChange={toggleStockStatus}
                  className="mr-2"
                />
                In Stock
              </label>
            </div>
            <button
              onClick={handleUpdateProduct}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Update Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
