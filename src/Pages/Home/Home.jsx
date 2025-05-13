import Dropdowns from "../../Components/Dropdown/Dropdowns";
import ProductList from "../../Components/ProductList/ProductList";
import FiltersSidebar from "../../Components/Sidebar/FiltersSidebar";

const Home = () => {
  return (
    <>
      <div className="main">
        <Dropdowns />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-sm-4">
                <FiltersSidebar />
              </div>
              <div className="col-lg-9 col-sm-8">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
