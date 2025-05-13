import { useContext } from "react";
import DropdownBtn from "./DropdownBtn";
import "./Dropdowns.css";
import { ProductContext } from "../ProductContext/ProductContext";

const Dropdowns = () => {
  const sortingOptions1 = ["Price", "Rating"];
  const sortingOptions2 = ["Low to High", "High to Low"];

  const { sortBy, setSortBy, order, setOrder } = useContext(ProductContext);

  return (
    <>
      <section id="dropdowns" className="p-1">
        <div className="container">
          <div className="row">
            <div className="dropdownBtns">
              <div className="col-12 d-flex justify-content-end">
                <div className="sortBy me-3">
                  <DropdownBtn
                    label="Sort By"
                    value={sortBy}
                    onChange={setSortBy}
                    sortingOptions={sortingOptions1}
                  />
                </div>
                <div className="sortBy me-3">
                  <DropdownBtn
                    label="Order"
                    value={order}
                    onChange={setOrder}
                    sortingOptions={sortingOptions2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dropdowns;
