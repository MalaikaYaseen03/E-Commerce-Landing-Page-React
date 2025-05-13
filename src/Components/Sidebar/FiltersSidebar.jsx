import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import "./FiltersSidebar.css";

const FiltersSidebar = () => {
  const { filters, setFilters, categories, brands } =
    useContext(ProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]:
        name.includes("Price") || name.includes("Rating")
          ? Number(value)
          : value,
    }));
  };

  const handleCheckbox = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      brand: "",
      minPrice: 0,
      maxPrice: 100000,
      minRating: 0,
      maxRating: 5,
      favourite: false,
      searchTerm: "",
    });
  };

  return (
    <>
      <div className="container-fluid sidebar">
        <div className="row">
          {/*Category Filter*/}
          <div className="col-12 filter-group">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              className="form-select"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div className="col-12 filter-group">
            <label className="form-label">Brand</label>
            <select
              name="brand"
              className="form-select"
              value={filters.brand}
              onChange={handleChange}
            >
              <option value="">All</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="col-6 filter-group">
            <label className="form-label">Min Price</label>
            <input
              type="number"
              name="minPrice"
              className="form-control"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min"
            />
          </div>
          <div className="col-6 filter-group">
            <label className="form-label">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              className="form-control"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max"
            />
          </div>

          {/* Rating Range */}
          <div className="col-6 filter-group">
            <label className="form-label">Min Rating</label>
            <input
              type="number"
              name="minRating"
              className="form-control"
              min="0"
              max="5"
              value={filters.minRating}
              onChange={handleChange}
              placeholder="Min"
            />
          </div>
          <div className="col-6 filter-group">
            <label className="form-label">Max Rating</label>
            <input
              type="number"
              name="maxRating"
              className="form-control"
              min="0"
              max="5"
              value={filters.maxRating}
              onChange={handleChange}
              placeholder="Max"
            />
          </div>

          {/* Favourite Checkbox */}
          <div className="col-12 form-check mt-3 filter-group ms-3">
            <input
              type="checkbox"
              name="favourite"
              className="form-check-input"
              id="favouriteCheck"
              checked={filters.favourite}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="favouriteCheck">
              Favourite Only
            </label>
          </div>

          {/* Reset Button */}
          <div className="col-12 mt-2">
            <button className="btn btn-primary w-100" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersSidebar;
