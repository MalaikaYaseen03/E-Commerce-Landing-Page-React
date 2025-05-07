import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]); // Initialize with product data
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: [0, 100000],
    rating: [0, 5],
    favourite: false,
  });

  return (
    <ProductContext.Provider
      value={{ product, setProduct, filters, setFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
};
