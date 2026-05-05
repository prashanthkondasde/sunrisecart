import MainSlider from "./MainSlider";
import FeatureCategory from "./FeatureCategory";
import Banner from "./Banner";
import Products from "./Products";
import AppFeatures from "./AppFeatures";  
// import AsNav from "./AsNav";  
import SingleProduct from "./SingleProduct";
const Home = () => {
  return (
    <>
        {/* <AsNav/> */}
        <MainSlider />
        <FeatureCategory />
        <Banner />
        <Products />
        <AppFeatures /> 
        <SingleProduct/>
    </>
  )
}

export default Home