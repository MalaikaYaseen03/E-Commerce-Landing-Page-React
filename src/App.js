import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
