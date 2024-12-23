import { useProduct } from "../../context/ProductContext";
import { FaStar } from "react-icons/fa";

const ProductFilter = () => {
  const { filter, setFilter, resetFilters } = useProduct();

  // Generic handler for filter updates
  const handleFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  const handleCheckboxChange = (key, value) => {
    setFilter((prevFilter) => {
      const updatedValues = prevFilter[key].includes(value)
        ? prevFilter[key].filter((item) => item !== value)
        : [...prevFilter[key], value];

      return {
        ...prevFilter,
        [key]: updatedValues,
      };
    });
  };

  return (
    <aside className="w-full h-3/4 text-sm lg:w-1/4 bg-white p-6 shadow rounded">
      <h2 className="font-bold text-lg mb-4">All Categories</h2>
      <ul className="space-y-2 text-sm mb-6">
        {[
          "Sleeping Bags",
          "Tents",
          "Backpacks",
          "Trekking Poles",
          "Shoes",
          "Accessories",
        ].map((category, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-700 hover:text-red-400"
              onClick={() => handleFilterChange("category", category)}>
              {category}
            </a>
          </li>
        ))}
      </ul>

      <hr className="my-4" />
      <h2 className="font-medium text-regular mb-4">Filter by Price</h2>
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max="500000"
          value={filter.maxPrice || 0}
          onChange={(e) =>
            handleFilterChange("maxPrice", Number(e.target.value))
          }
          className="price-slider w-full accent-red-400"
        />
        <p className="text-gray-600 mt-2">
          Price: $0 - ${filter.maxPrice || 0}
        </p>
      </div>

      <hr className="my-4" />
      <h2 className="font-medium text-regular mb-4">Filter by Location</h2>
      <select
        className="w-full border-gray-300 rounded"
        value={filter.location || ""}
        onChange={(e) => handleFilterChange("location", e.target.value)}>
        <option value="">Select Location</option>
        {[
          "Kathmandu",
          "Bhaktapur",
          "Lalitpur",
          "Pokhara",
          "Chitwan",
          "Butwal",
          "Biratnagar",
          "Janakpur",
          "Birgunj",
          "Dhangadi",
          "Nepalgunj",
          "Palpa",
          "Ilam",
          "Dharan",
        ].map((loc, index) => (
          <option key={index} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>

      <hr className="my-4" />
      <h2 className="font-medium text-regular mb-4">Filter by Rating</h2>
      <div className="space-y-2">
        {[5, 4, 3].map((stars) => (
          <label key={stars} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={
                Array.isArray(filter.rating) && filter.rating.includes(stars)
              }
              onChange={() => handleCheckboxChange("rating", stars)}
            />
            <div className="flex">
              {Array.from({ length: stars }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </label>
        ))}
      </div>

      <hr className="my-4" />
      <button
        className="mt-6 w-full bg-red-400 text-white py-2 px-4 rounded"
        onClick={() => alert("Filters applied!")}>
        Apply Filters
      </button>
      <button
        className="text-red-400 text-center text-sm mt-5 block"
        onClick={resetFilters}>
        Reset Filters
      </button>
    </aside>
  );
};

export default ProductFilter;
