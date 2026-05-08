import Slider from "react-slick";
import { useSelector } from "react-redux";
const FeatureCategory = () => {
    // console.log(data.categories);
    const Slickslider = Slider.default ? Slider.default : Slider;
    const products = useSelector((state) => state.products.items);
    const getCategoriesWithImage = (products) => {
    const map = new Map();

    products.forEach((p) => {
      if (!map.has(p.category)) {
        map.set(p.category, {
          name: p.category,
          image: p.thumbnail, // first product image
        });
      }
    });

    return Array.from(map.values());
  };
    const categories = getCategoriesWithImage(products);
    

   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="container py-12">
    <div className="flex flex-wrap">
        <div className="w-full">
            <h2 className="text-lg absolute z-10">Featured Categories</h2>
        </div>
    </div>
    <div className="swiper-wrapper py-12">
    <Slickslider {...settings}>
    {categories.map((category,index) => (
        <div className="pl-2 pr-2" key={index}>
            <a href="#!">
            <div className="relative rounded-lg break-words border bg-white border-gray-300 transition duration-75 hover:transition hover:duration-500 ease-in-out hover:border-green-600 hover:shadow-md" key={index}>
                <div className="py-6 text-center">
                <img src={category.image} alt={category.name} className="mb-2 m-auto h-auto" />
                <div className="text-base">{category.name}</div>
                </div>
            </div>
            </a>
      </div>
    ))}

      </Slickslider>
    </div>
    </div>
  );
}

export default FeatureCategory