import { createContext, useState } from "react";
import products from "../../Data/Products";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(products); // Initialize with product data
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: [0, 100000],
    rating: [0, 5],
    favourite: false,
  });
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        order,
        setOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
