import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <>
      {product.imageUrl && (
        <div className="product-img">
          <img
            src={product.imageUrl}
            loading="lazy"
            alt={product.productName}
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      <div className="card-body">
        <div className="product-category-box">
          <div className="product-category">
            <h6 className="category">{product.category}</h6>
          </div>
        </div>

        <h3 className="product-title">
          {product.productName} - {product.brand.name} ({product.brand.country})
        </h3>

        <p className="product-description">{product.description}</p>
      </div>
      <div className="card-footer">
        <div className="priceAndRating">
          <span className="price me-2">
            <i className="bi bi-tags-fill"></i>${product.price}
          </span>
          <span className="rating">
            <i className="bi bi-star-fill"></i>
            {product.rating}
          </span>
        </div>
        <div className="actions">
          <span className="favourite">
            <i className="bi bi-heart me-2"></i>
          </span>
          <span className="cart">
            <i className="bi bi-cart"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
