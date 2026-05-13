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
import Register from "./pages/auth/Register"
import Product from "./pages/admin/Product";
import Unauthorized from "./components/shared/Unauthorized";
import Pagenotfound from "./components/shared/Pagenotfound";
import {PublicRoute,ProtectedRoute,RoleGuard} from "@srcart/shared-auth";
import { ROLES } from "@srcart/shared-auth";
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
          {/* Prevent logged-in users from seeing:login,regster,forgotpwd */}
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* Protect private pages: */}
          <Route element={<ProtectedRoute />}>
            <Route path="contact" element={<ContactUs />} />
          </Route>  
          {/* Restrict pages by role.admin,vendor,customer   
            when product route run 
            it will go to RoleGuard and pass ROLES.CUSTOMER:"customer" Value
            In ROleGuard it will check with useAUth of role value
            if allowedRoles consist useAuth user role value
            it will give access, else not          
            if multiple roles allowedRoles={["admin","manager"]} OR
            allowedRoles={[ROLES.ADMIN,ROLES.CUSTOMER]}
          */}
          <Route path="/product" element={<RoleGuard
            allowedRoles={[ROLES.ADMIN]}>
            <Product />
          </RoleGuard>}>
          </Route>  
           <Route
            path="product/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductDetails />
              </Suspense>
            }
          />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
