import products from "../../Data/Products";
import ProductCard from "../Card/ProductCard";

const ProductList = () => {
  return (
    <>
      <div id="products">
        {products.map((product) => (
          <div className="col-lg-4 col-sm-6 card-box" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
