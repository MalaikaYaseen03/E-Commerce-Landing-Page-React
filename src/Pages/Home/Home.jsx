import Dropdowns from "../../Components/Dropdown/Dropdowns";
import ProductList from "../../Components/ProductList/ProductList";

const Home = () => {
  return (
    <>
      <div className="main">
        <Dropdowns />
        <div className="content">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Home;
