import { useContext } from "react";
import ProductCard from "../Card/ProductCard";
import { ProductContext } from "../ProductContext/ProductContext";

const ProductList = () => {
  const { filters, product, sortBy, order } = useContext(ProductContext);

  const searchTerm = filters?.searchTerm?.toLowerCase() || "";

  // Filtering Logic
  const filteredProducts = product.filter((productItem) => {
    // Checks if the product’s name includes the typed search term (case-insensitive).
    const titleMatch = productItem.productName
      ?.toLowerCase()
      .includes(searchTerm);

    // If a category is selected, it must exactly match productItem.category
    // If no category is selected, it returns true (includes all).
    const categoryMatch = filters.category
      ? productItem.category === filters.category
      : true;

    // Checks if selected brand matches the product's brand name.
    const brandMatch = filters.brand
      ? productItem.brand?.name === filters.brand
      : true;

    // Filters products between selected minimum and maximum price.
    const priceMatch =
      productItem.price >= filters.minPrice &&
      productItem.price <= filters.maxPrice;

    // Filters products that fall within a certain rating range (e.g. 3 to 5 stars)
    const ratingMatch =
      productItem.rating >= filters.minRating &&
      productItem.rating <= filters.maxRating;

    const favoriteMatch = filters.favourite
      ? productItem.favourite === true
      : true;
    // The product must pass all filters to be included in the result.
    return (
      titleMatch &&
      categoryMatch &&
      brandMatch &&
      priceMatch &&
      ratingMatch &&
      favoriteMatch
    );
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
