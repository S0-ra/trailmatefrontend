import { useState, createContext, useContext } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const intialFilter = {
    maxPrice: 500000,
    location: null,
    rating: 0,
  };

  const [filter, setFilter] = useState(intialFilter);
  const [searchQuery, setSearchQuery] = useState("");

  const resetFilters = () => {
    setFilter(intialFilter);
  };

  return (
    <ProductContext.Provider
      value={{
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        resetFilters,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
