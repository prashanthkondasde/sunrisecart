
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@srcart/shared-store";
import { usePermission } from "@srcart/shared-auth";
// import ItemRating from "./ItemRating";
const ProductItem = ({ product, isWished,handleWishlist }) => {
    const dispatch = useDispatch();
  const { id,category,title,brand,rating,price,thumbnail } = product;
    //check permsion for add cart button based on user role;
  const canAddToCart = usePermission('cart:add')

  return (
    <div className="relative rounded-lg break-words border bg-white border-gray-300 card-product">
                <div className="flex-auto p-4  h-full">
                    <div className="w-full items-center justify-center">
                            <div className="text-right absolute top-2 left-2">
                            <button
                              onClick={() => handleWishlist(product.id)}
                              className="rounded-full bg-green-500 bg-opacity-25 hover:bg-opacity-50"
                            >
                              {isWished ? (
                                <FaHeart size={15} />
                              ) : (
                                <FaRegHeart size={20} />
                               
                              )}
                            </button>
                          </div>
                        <Link to={`/product/${id}`}><img src={thumbnail} alt={title} className="max-h-full max-w-full object-contain mt-3" /></Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a href="#!" className="text-decoration-none text-gray-500"><small>{category}</small></a>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base truncate"><a href="#!">{title}</a></h3>
                            <p className="text-gray-600">{brand}</p>
                            <small className="text-yellow-500 flex items-center gap-x-1">
                                <span>{rating}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                                    height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                </svg>
                            </small>
                            {/* <ItemRating product={product} /> */}
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-gray-900 font-semibold">${price.toFixed(2)}</span>
                                <span className="line-through text-gray-500"> ${(price * 1.2).toFixed(2)}</span>
                            </div>
                            {canAddToCart && (
                            <div>
                                <button type="button" onClick={()=>dispatch(addToCart(product))}
                                    className="btn inline-flex items-center gap-x-1 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="14"
                                        height="14" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                    <span>Add</span>
                                </button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ProductItem