import { lazy,Suspense } from "react";
import MainSlider from "../components/MainSlider";
import { useEffect } from "react";
import { fetchProducts } from "@srcart/shared-store";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import AppFeatures from "../components/AppFeatures";  
// import {  store} from "@srcart/shared-store";
const CatalogApp = lazy(() => import('catalog/CatalogApp'))
const ProductApp = lazy(()=> import('product/ProductApp'))
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    // console.log(
    //     "HOST STORE STATE:",
    //     store.getState()
    //   );
  }, []);
  
  return (
    <>
        {/* <AsNav/> */}
        <MainSlider />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogApp />
        </Suspense>
        <Banner />
        
        <Suspense fallback={<div>Loading...</div>}>
          <ProductApp />
        </Suspense>
        <AppFeatures /> 
    </>
  )
}

export default Home