// import data from "./data/Products.json";
// import Carosuel from "./Carosuel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy,Suspense } from "react";

// import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from "./components/Error/ErrorFallback";
// import MyErrorBoundary from "./components/Error/MyErrorBoundary";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/auth/Login"
// import SingleProduct from "./components/SingleProduct";
// import CartDrawer from "./components/CartDrawer";
// import MainSlider from "./components/MainSlider";
// import FeatureCategory from "./components/FeatureCategory";
// import Banner from "./components/Banner";
// import Products from "./components/Products";s
// import AppFeatures from "./components/AppFeatures";
// const categories = data.categories;
// const products = data.products;
// const ProductApp = lazy(()=> import('product/ProductApp'))
const ProductDetails = lazy(()=> import('product/ProductDetails'))

function App() {
  // const  greeting = import.meta.env.VITE_GREETING;

  return (
    <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>   
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<ContactUs />} />
           <Route
            path="product/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
