import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchProductById } from "@srcart/shared-store";
import { addToCart,updateQuantity } from "@srcart/shared-store";
import {Button} from "@srcart/shared-ui";
const  ProductDetails = () =>{
  const { id } = useParams();
  const dispatch = useDispatch();

const { items, selectedProduct, loading } = useSelector(
    (state) => state.products
  );
     // try to find from list first
  const existingProduct = items.find((p) => p.id === Number(id));
  const product = existingProduct || selectedProduct;

  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === Number(id));
  const initialQty = cartItem?.quantity || 1;
      useEffect(() => {
    if (!existingProduct) {
      dispatch(fetchProductById(id));    }
  }, [id,existingProduct]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Not found</p>;
  const { category,title, price, description, thumbnail } = product;

    return (
      <>
      <div className="container">
			<div className="flex flex-wrap mt-4">
				<div className="w-full">
					<nav aria-label="breadcrumb">
						<ol className="flex flex-wrap">
							<li className="inline-block text-green-600 mr-2">
								<a href="#!">
									Home
									<svg xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-chevron-right inline-block" width="14"
										height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
										fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 6l6 6l-6 6" />
									</svg>
								</a>
							</li>
							<li className="inline-block text-green-600 mr-2">
								<a href="#!">
									{category}
									<svg xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-chevron-right inline-block" width="14"
										height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
										fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 6l6 6l-6 6" />
									</svg>
								</a>
							</li>
							<li className="inline-block text-gray-500 active" aria-current="page">{title}</li>
						</ol>
					</nav>
				</div>
			</div>
      </div>
      <section className="my-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2">
              {/*<!-- img slide */}
              <div className="product" id="product">
                {/* <div className="zoom" onmousemove="zoom(event)"
                  style={{ backgroundImage: `url(${thumbnail})` }}> */}
                  <img src={thumbnail} alt="" />
                {/* </div> */}
              </div>
              {/*<!-- product tools */}
              {/* <div className="product-tools">
                <div className="thumbnails flex gap-3" id="productThumbnails">
                  <div className="w-1/4">
                    <div className="thumbnails-img">
                      <img src={thumbnail} alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="lg:w-1/2 pr-4 pl-4">
              <div className="lg:pl-10 mt-6 md:mt-0">
                <div className="flex flex-col gap-4">
                  {/*<!-- content */}
                  <a href="#!" className="block text-green-600">{category}</a>
                  {/*<!-- heading */}
                  <div className="flex flex-col">
                    <h1>{title}</h1>
                    <p className="text-gray-600">{description}</p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <small className="text-yellow-500 inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-star-filled" width="14"
                            height="14" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                              strokeWidth="0" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-star-filled" width="14"
                            height="14" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                              strokeWidth="0" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-star-filled" width="14"
                            height="14" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                              strokeWidth="0" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-star-filled" width="14"
                            height="14" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                              strokeWidth="0" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-star-filled" width="14"
                            height="14" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                              strokeWidth="0" fill="currentColor"></path>
                          </svg>
                        </small>
                        <a href="#" className="text-green-600">(30 reviews)</a>
                      </div>
                      <div className="text-md">
                        <span className="text-gray-900 font-semibold">${price?.toFixed(2)}</span>
                        <span className="line-through text-gray-500"> ${(price ? (price * 1.33) : 0).toFixed(2)}</span>

                        <span><small className="text-red-600"> 26% Off</small></span>
                      </div>
                    </div>
                  </div>
                  {/*<!-- hr */}
                  <div className="flex flex-col gap-6">
                    <hr />
                    <div>
                      <button type="button"
                        className="btn inline-flex items-center gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
                        250g
                      </button>
                      {/*<!-- btn */}
                      <button type="button"
                        className="btn inline-flex items-center gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
                        500g
                      </button>
                      {/*<!-- btn */}
                      <button type="button"
                        className="btn inline-flex items-center gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
                        1kg
                      </button>
                    </div>
                    <div>
                      {/*<!-- input */}
                      <div className="w-1/3 md:w-1/4 lg:w-1/5">
                        {/*<!-- input */}
                       <div className="input-group input-spinner rounded-lg flex justify-between items-center">
                          <input type="button" value="-" className="button-minus w-8 py-1 border-r cursor-pointer border-gray-300"
                             onClick={()=>{
                            if (cartItem) {
                              dispatch(
                                updateQuantity({
                                  id:Number(id),
                                  quantity: Number(initialQty) - 1,
                                })
                              );
                            } else {
                              dispatch(addToCart({ ...product, quantity: 1 }));
                            }
                            }}
                              />
                          <input type="number" step="1" max="10" value={initialQty} name="quantity"
                            className="quantity-field w-9 px-2 text-center hcartItem-7 border-0 bg-transparent" readOnly />
                          <input type="button" value="+" className="button-plus w-8 py-1 border-l cursor-pointer border-gray-300"
                            data-field="quantity" onClick={()=>{
                            if (cartItem) {
                              dispatch(
                                updateQuantity({id:Number(id),
                                  quantity: Number(initialQty) + 1,
                                })
                              );
                            } else {
                              dispatch(addToCart({ ...product, quantity: 1 }));
                            }
                            }} />	
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-2 items-center">
                      <div className="lg:w-1/3 md:w-2/5 w-full grid">
                        <Button type="button"  onClick={()=>dispatch(addToCart(product))}
                          className="btn gap-x-1 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                            <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                          </svg>
                          Add to cart
                        </Button>
                      </div>
                      <div className="md:w-1/3 w-full">
                        {/*<!-- btn */}
                        <a href="#"
                          className="mr-1 btn inline-flex items-center gap-x-2 px-0 h-10 w-10 justify-center bg-gray-200 text-gray-800 border-gray-200 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrows-exchange" width="20"
                            height="20" viewBox="0 0 24 24" strokeWidth="2"
                            stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10h14l-4 -4"></path>
                            <path d="M17 14h-14l4 4"></path>
                          </svg>
                        </a>
                        <a href="#"
                          className="btn inline-flex items-center gap-x-2 px-0 h-10 w-10 justify-center bg-gray-200 text-gray-800 border-gray-200 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-heart" width="20" height="20"
                            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    {/*<!-- hr */}
                    <hr />
                  </div>
                  <div>
                    {/*<!-- table */}
                    <table className="text-left w-full">
                      <tbody>
                        <tr>
                          <td className="px-6 py-3">Product Code:</td>
                          <td className="px-6 py-3">FBB00255</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-3">Availability:</td>
                          <td className="px-6 py-3">In Stock</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-3">Type:</td>
                          <td className="px-6 py-3">Fruits</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-3">Shipping:</td>
                          <td className="px-6 py-3">
                            <small>
                              01 day shipping.
                              <span className="text-gray-500">( Free pickup today)</span>
                            </small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      </>
    )
    
}

export default ProductDetails;
