import DropdownBtn from "./DropdownBtn";
import "./Dropdowns.css";

const Dropdowns = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="dropdowns">
            <div className="col-6">
              <div className="sortBy d-flex justify-content-around">
                <DropdownBtn
                  dropdownTitle="Sort By"
                  dropdownItem1="Ascending Order"
                  dropdownItem2="Descending Order"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="field d-flex justify-content-around">
                <DropdownBtn
                  dropdownTitle="Field"
                  dropdownItem1="Category"
                  dropdownItem2="Brand"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdowns;
