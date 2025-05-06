import DropdownBtn from "./DropdownBtn";
import "./Dropdowns.css";

const Dropdowns = () => {
  return (
    <>
      <section id="dropdowns" className="p-1">
        <div className="container">
          <div className="row">
            <div className="dropdownBtns">
              <div className="col-12 d-flex justify-content-end">
                <div className="sortBy me-3">
                  <DropdownBtn dropdownTitle="Category" />
                </div>
                <div className="field">
                  <DropdownBtn dropdownTitle="Brand" />
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
