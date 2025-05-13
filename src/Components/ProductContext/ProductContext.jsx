import { createContext, useMemo, useState } from "react";
import products from "../../Data/Products";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(products); // Initialize with product data
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    minPrice: 0,
    maxPrice: 100000,
    minRating: 0,
    maxRating: 5,
    favourite: false,
    searchTerm: "",
  });
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");

  // Dynamically generate categories and brands
  const categories = useMemo(() => {
    const unique = [...new Set(products.map((product) => product.category))];
    return unique;
  }, []);

  const brands = useMemo(() => {
    const unique = [...new Set(products.map((p) => p.brand.name))];
    return unique;
  }, []);

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
        categories,
        brands,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
