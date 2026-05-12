import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Products from  './components/Products';
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route index element={<Products />} />

      <Route
        path="product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;