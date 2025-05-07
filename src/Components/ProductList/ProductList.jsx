import { useContext } from "react";
import products from "../../Data/Products";
import ProductCard from "../Card/ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductList = () => {
  return (
    <>
      <div id="products">
        <div className="container">
          <div className="row">
            {products.map((product) => (
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
