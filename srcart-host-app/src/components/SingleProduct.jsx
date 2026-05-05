import { useState } from "react";
import Slider from "react-slick";
// import { baseUrl } from "../assets/images/config";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const  SingleProduct = () =>{
    const { id } = useParams();
    // const products = useSelector((state) => state.products.items);
    // const product = products.find((p) => p.id == id);
    const [pro,setPro] = useState({
      images:[
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"]
    });
    console.log(pro.images[1]);
  const settings = {
    customPaging: (i) => (
      <img src={pro.images[i]} className="h-12 w-12 object-cover" />
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {pro.map((img, i) => (
        <div key={i}>
          <img src={pro.images[i]} className="w-full h-80 object-contain" />
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default SingleProduct;
