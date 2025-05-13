import { useContext } from "react";
import ProductCard from "../Card/ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductList = () => {
  const { filters, product, sortBy, order } = useContext(ProductContext);

  const searchTerm = filters?.searchTerm?.toLowerCase() || "";

  // Filtering Logic
  const filteredProducts = product.filter((productItem) => {
    const productTitle = productItem?.productName?.toLowerCase() || "";
    return productTitle.includes(searchTerm);
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Price") {
      return order === "Low to High" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "Rating") {
      return order === "Low to High"
        ? a.rating - b.rating
        : b.rating - a.rating;
    }
    return 0; // No sorting
  });

  return (
    <>
      <div id="products">
        <div className="container">
          <div className="row">
            {sortedProducts.length > 0 &&
              sortedProducts.map((product) => (
                <div className="col-lg-4 col-sm-6 card-box" key={product.id}>
                  <div className="card card-product anime-box">
                    {product && <ProductCard product={product} />}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
