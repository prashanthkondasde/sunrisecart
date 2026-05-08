import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@srcart/shared-store";

const CartDrawer = ({ open, setOpen,cart }) =>{
    // alert(open)
	const cartItems = useSelector((state) => state.cart.items);
	// console.log(cartSelector);
    const dispatch = useDispatch();
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer */}
      <div style={{
    transform: open ? "translateX(0)" : "translateX(100%)",
  }} className="fixed top-0 right-0 h-full w-150 bg-white p-5 transform translate-x-full z-50">
      <div className="offcanvas-header border-b">
		<div>
			<h5 id="offcanvasRightLabel">Shop Cart</h5>
			{/* <span>Location in 382480</span> */}
		</div>
		<button type="button" className="btn-close text-inherit" onClick={()=>setOpen(false)} aria-label="Close">
			<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x text-gray-700" width="24"
				height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
				strokeLinejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M18 6l-12 12" />
				<path d="M6 6l12 12" />
			</svg>
		</button>
	</div>
	<div className="offcanvas-body p-4">
		<div>
			
			{cartItems.length === 0 ? (
			<h2 className="text-gray-800 text-center">Cart is empty</h2>
			) : (
			<>
			<div className="bg-red-500 bg-opacity-25 text-red-800 mb-3 rounded-lg p-4" role="alert">
				You’ve got FREE delivery. Start
				<a href="#!" className="alert-link">checkout now!</a>
			</div>
			<ul className="list-none">
			{cartItems.map((item) => (
				<li className="py-3 border-t" key={item.id}>
					<div className="flex items-center">
						<div className="w-1/2 md:w-1/2 lg:w-3/5">	
							<div className="flex">
								<img src={item.thumbnail} alt="Ecommerce" className="w-16 h-16" />
								<div className="ml-3">
									<a href="#!" className="text-inherit">
										<h6>{item.title}</h6>
									</a>
									<span><small className="text-gray-500">{item.price.toFixed(2)} / lb</small></span>
									<div className="mt-2 small leading-none">
										<a href="#!" onClick={() => dispatch(removeFromCart(item.id))} className="text-green-600 flex items-center">
											<span className="mr-1 align-text-bottom">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14"
													height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
													strokeLinecap="round" strokeLinejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<path d="M4 7l16 0" />
													<path d="M10 11l0 6" />
													<path d="M14 11l0 6" />
													<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
													<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
												</svg>
											</span>
											<span className="text-gray-500 text-sm" >
												Remove
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="w-1/3 md:w-1/4 lg:w-1/5">
							<div className="input-group input-spinner rounded-lg flex justify-between items-center">
								<input type="button" value="-" className="button-minus w-8 py-1 border-r cursor-pointer border-gray-300"
									 onClick={()=>dispatch(updateQuantity({id: item.id, quantity: Number(item.quantity) - 1}))}
										/>
								<input type="number" step="1" max="10" value={item.quantity} name="quantity"
									className="quantity-field w-9 px-2 text-center h-7 border-0 bg-transparent" readOnly />
								<input type="button" value="+" className="button-plus w-8 py-1 border-l cursor-pointer border-gray-300"
									data-field="quantity" onClick={()=>dispatch(updateQuantity({id: item.id, quantity: Number(item.quantity) + 1}))} />	
							</div>
						</div>
						<div className="w-1/5 text-center md:w-1/5">
							<span className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
						</div>
					</div>
				</li>
			))}
			</ul>
			<div className="flex justify-between mt-4">
				<a href="#!"
					className="btn inline-flex items-center gap-x-2 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300">
					Continue Shopping
				</a>
			</div>
			</>
			)}
		</div>
	</div>
		</div>
      {/* <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 
  transform transition-transform duration-300 
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setOpen(false)} className="p-4">
          Close
        </button>
      </div> */}
    </>
  );
}

export default CartDrawer;