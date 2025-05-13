import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { setFilters } = useContext(ProductContext);

  // function for searching products
  const handleSearch = (event) => {
    setFilters((prev) => ({ ...prev, searchTerm: event.target.value }));
  };

  return (
    <>
      <div className="container searchBar">
        <div className="row">
          <div className="col-12">
            <div className="searchInputField">
              <input
                type="search"
                name="search"
                id="search"
                className="bi bi-search"
                placeholder="Search products..."
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
