import { useContext } from "react";
import products from "../../Data/Products";
import ProductCard from "../Card/ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductList = () => {
  const { filters } = useContext(ProductContext);

  const filteredProducts = products.map((product) => {
    const matchedSearch =
      filters.searchTerm?.trim().length === 0 ||
      product.name.toLowerCase().includes(filters.searchTerm?.toLowerCase());

    return matchedSearch;
  });
  return (
    <>
      <div id="products">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 &&
              filteredProducts.map((product) => (
                <div className="col-lg-4 col-sm-6 card-box" key={product.id}>
                  <div className="card card-product anime-box">
                    <ProductCard product={product} />
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
