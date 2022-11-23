import { Divider } from "@mui/material";
import "./App.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header/index";
import Products from "./Components/Products/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
