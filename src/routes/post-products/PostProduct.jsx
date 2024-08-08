import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { Link } from "react-router-dom";

const form = {
  title: "",
  description: "",
  price: "",
  category: "",
  newCategory: "",
  stock: "",
  manufacturer: "",
  selectedFiles: [],
};
export default function PostProduct() {
  const [formData, setFormData] = useState(form);
  const [addNewCategory, setAddNewCategory] = useState(false);
  const [errors, setErrors] = useState({});
  const [catergoryID, setCatergoryID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const totalFiles = formData.selectedFiles.length + files.length;

    if (totalFiles > 3) {
      alert("You can only upload a maximum of 3 files");
      return;
    }
    setFormData({
      ...formData,
      selectedFiles: [...formData.selectedFiles, ...files],
    });
  };

  useEffect(() => {
    const fetchCatergories = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error(
          "Error getting catergories:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchCatergories();
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const totalFiles = formData.selectedFiles.length + files.length;

    if (totalFiles > 3) {
      alert("You can only upload a maximum of 3 files");
      return;
    }
    setFormData({
      ...formData,
      selectedFiles: [...formData.selectedFiles, ...files],
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      const selectedCategory = categories.find(
        (category) => category.name === value
      );
      const categoryId = selectedCategory ? selectedCategory._id : "";
      setCatergoryID(categoryId);

      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Title is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0)
      tempErrors.price = "Price must be a positive number";
    if (!formData.category && !addNewCategory)
      tempErrors.category = "Category is required";
    if (addNewCategory && !formData.newCategory)
      tempErrors.newCategory = "New category is required";
    if (!formData.stock || formData.stock <= 0)
      tempErrors.stock = "Stock must be a positive number";
    if (!formData.manufacturer)
      tempErrors.manufacturer = "Manufacturer is required";
    if (formData.selectedFiles.length === 0)
      tempErrors.selectedFiles = "At least one image is required";

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    if (addNewCategory) {
      addCatergory(formData.newCategory);
    } else {
      const data = {
        name: formData.title,
        description: formData.description,
        newPrice: formData.price,
        category: catergoryID,
        stock: formData.stock,
        imageUrl: "https://i.redd.it/azb5a2h0jar21.png",
        manufacturer: formData.manufacturer,
      };

      postInDB(data);
    }
  };

  const addCatergory = async (catergory) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/categories/add`,
        {
          name: catergory,
        }
      );
      const data = {
        name: formData.title,
        description: formData.description,
        newPrice: formData.price,
        category: response.data._id,
        stock: formData.stock,
        imageUrl: "https://i.redd.it/azb5a2h0jar21.png",
        manufacturer: formData.manufacturer,
      };
      postInDB(data);
    } catch (error) {
      setIsLoading(false);
      console.error(
        "Error adding catergory:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const postInDB = async (data) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/products`,
        data
      );
      setIsLoading(false);
      setFormData(form);
      console.log("Product posted successfully", response.data);
    } catch (error) {
      setIsLoading(false);
      console.error(
        "Error posting product",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container mx-auto p-12 bg-gray-100 ">
          <div className="container mx-auto bg-white p-6 rounded-3xl">
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-6">
                <h5 className="text-xl font-semibold py-5">
                  Fill in the item details to post
                </h5>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Title</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      A title must describe one position only.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="e.g. Hammer"
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Description</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Provide a short description about the product. Keep it
                      short and to the point.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <textarea
                      rows={6}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.description
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="Description"
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm">
                        {errors.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Price</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Provide the newest price of the product.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.price ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="e.g. 10.00"
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm">{errors.price}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Category</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Select a category or give a new category for the product.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="add-new-category"
                        checked={addNewCategory}
                        onChange={(e) => setAddNewCategory(e.target.checked)}
                      />
                      <label
                        htmlFor="add-new-category"
                        className="ml-2 text-sm text-gray-500"
                      >
                        Add new category
                      </label>
                    </div>
                    {addNewCategory ? (
                      <input
                        type="text"
                        name="newCategory"
                        value={formData.newCategory}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                          errors.newCategory
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter new category"
                      />
                    ) : (
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                          errors.category ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    )}
                    {errors.category && (
                      <p className="text-red-500 text-sm">{errors.category}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Stock</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Provide the amount of stock for the product.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.stock ? "border-red-500" : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="e.g. 100"
                    />
                    {errors.stock && (
                      <p className="text-red-500 text-sm">{errors.stock}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Manufacturer</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Provide the name of the manufacturer of the product.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-3 py-2 border ${
                        errors.manufacturer
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                      placeholder="e.g. ABC Manufacturing"
                    />
                    {errors.manufacturer && (
                      <p className="text-red-500 text-sm">
                        {errors.manufacturer}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b pb-5">
                  <div className="w-1/2">
                    <p className="text-md font-bold">Images</p>
                    <p className="text-sm mt-2 text-gray-500 w-2/3">
                      Chose up to 3 images of the product.
                    </p>
                  </div>
                  <div className="w-1/2">
                    <div
                      className="flex items-center justify-center w-full"
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                      >
                        {formData.selectedFiles.length > 0 ? (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <h3 className="text-lg font-semibold text-gray-700 ">
                              Selected Files
                            </h3>
                            <ul>
                              {formData.selectedFiles.map((file, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-500 "
                                >
                                  {file.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <IoCloudUpload className="w-8 h-8 mb-4 text-gray-500  " />

                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col"></div>
                        {errors.selectedFiles && (
                          <p className="text-red-500 text-sm">
                            {errors.selectedFiles}
                          </p>
                        )}
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          accept="image/svg+xml,image/png,image/jpeg,image/gif"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
