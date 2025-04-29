import Dropdowns from "../Dropdown/Dropdowns";
import TextInput from "../TextInput/TextInput";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <div className="logo">
                <h1>Store</h1>
              </div>
            </div>
            <div className="col-md-6 col-10">
              <TextInput />
            </div>
            <div className="col-md-4">
              <Dropdowns />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
