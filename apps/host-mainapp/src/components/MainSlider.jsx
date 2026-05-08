import Slider from "react-slick";

import img1 from '../assets/images/slider/slider-1.jpg';
import img2 from '../assets/images/slider/slider-2.jpg';
// import img3 from '../assets/images/slider/slider-image-3.jpg';
const MainSlider = () => {
  const Slickslider = Slider.default ? Slider.default : Slider;
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="mt-8">
    <div className="container mt-7">
      <div className="flex">
        <div className="md:w-3/4 w-full my-0">
          <Slickslider {...settings}>
          <div className="relative">
            <img
              className="w-full h-[400px] object-cover object-right rounded-lg md:rounded-l-lg md:rounded-r-none"
              src={img1}
            />
             {/* Content ABOVE image */}
            <div className="absolute inset-0 z-10 flex items-center px-10">
              <div className="max-w-lg">
                <h1 className="text-gray-900 text-xl lg:text-5xl font-bold leading-tight mb-2">SuperMarket For Fresh Grocery
									</h1>
                <p className="text-md font-light mb-4">Introduced a new model for online grocery shopping and convenient home
										delivery.</p>
                <a href="#!"
									className="btn inline-flex items-center gap-x-2 bg-gray-800 text-white border-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-900 active:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
									Shop Now
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right inline-block"
										width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 12l14 0" />
										<path d="M13 18l6 -6" />
										<path d="M13 6l6 6" />
									</svg>
								</a>
              </div>
            </div>
            </div>
            <div className="relative">
            <img
              className="w-full h-[400px] object-cover object-right rounded-lg md:rounded-l-lg md:rounded-r-none"
              src={img2}
            />
             {/* Content ABOVE image */}
            <div className="absolute inset-0 z-10 flex items-center px-10">
              <div className="max-w-lg my-7">
                <h2 className="text-gray-900 text-xl lg:text-5xl font-bold leading-tight">
										Free Shipping on
										<br />
										orders over 
										<span className="text-green-600"> $100</span>
									</h2>
                <p className="text-md font-light">Free Shipping to First-Time Customers Only, After promotions and
										discounts are applied.</p>
                <a href="#!"
									className="btn inline-flex items-center gap-x-2 bg-gray-800 text-white border-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-900 active:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
									Shop Now
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right inline-block"
										width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M5 12l14 0" />
										<path d="M13 18l6 -6" />
										<path d="M13 6l6 6" />
									</svg>
								</a>
              </div>
            </div>
            </div>
          </Slickslider>
        </div>
        <div className="md:w-1/4 md:block hidden">
          <div className="h-1/2">
            <img
              className="w-full h-[200px] object-cover md:rounded-tr-lg"
              src={img1}
            />
          </div>
          <div className="h-1/2">
            <img
              className="w-full h-[200px] object-cover md:rounded-tr-lg"
              src={img2}
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
export default MainSlider;
