import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from './redux/slice/productSlice';
import ProductItem from './ProductItem'
const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const handleWishlist = (id) => {
        console.log(id);
    };
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
  return (
    <section className="lg:my-14 my-8">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full mb-6">
                    <h2 className="text-lg">Popular Products</h2>
                </div>
            </div>  
        </div>
        <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:gap-4 xl:grid-cols-5">
         {/* {data ? ( */}
        {products.map((product,index) => (
            <ProductItem key={index} product={product}
                handleWishlist={() => handleWishlist(index)}
                isWished={false}
            />
        ))}
        {/* ) : (
          <div className="w-full">
            <Spinner />
          </div>
        )} */}
        </div>
    </section>
  )
}

export default Products