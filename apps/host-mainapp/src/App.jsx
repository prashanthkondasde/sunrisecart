// import data from "./data/Products.json";
// import Carosuel from "./Carosuel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from "./components/Error/ErrorFallback";
// import MyErrorBoundary from "./components/Error/MyErrorBoundary";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
// import SingleProduct from "./components/SingleProduct";
// import CartDrawer from "./components/CartDrawer";
// import MainSlider from "./components/MainSlider";
// import FeatureCategory from "./components/FeatureCategory";
// import Banner from "./components/Banner";
// import Products from "./components/Products";
// import AppFeatures from "./components/AppFeatures";
// const categories = data.categories;
// const products = data.products;

function App() {
  // const  greeting = import.meta.env.VITE_GREETING;

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          {/* <Route path="/products/*" element={<ProductApp />} /> */}
          {/* <Route path="product/:id" element={<SingleProduct />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
