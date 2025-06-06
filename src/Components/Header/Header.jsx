import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-4">
              <div className="logo">
                <h1>Store</h1>
              </div>
            </div>
            <div className="col-lg-6 col-8">
              <SearchBar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
