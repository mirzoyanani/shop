import "./App.css";
import Header from "./Header";
import Products from "./Products";
import Basket from "./Basket";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={    <Products />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}
export default App;
