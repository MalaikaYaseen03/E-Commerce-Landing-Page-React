import "./TextInput.css";

const TextInput = () => {
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
                placeholder="Search for products..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextInput;
