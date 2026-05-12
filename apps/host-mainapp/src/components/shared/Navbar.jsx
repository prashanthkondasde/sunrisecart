import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegHeart, FaRegUser } from "react-icons/fa";
import sunrise from "../../assets/images/logo/sunrise-cart-logo.png";
import { useSelector } from 'react-redux';
import { Button } from "@srcart/shared-ui";
const Navbar = ({onCartClick, cartItems=[]}) => {
    // const [menuOpen, setMenuOpen] = useState(false);
	const cartLength = useSelector((state) => state.cart.items.length);
	const user = useSelector((state)=>state.auth);
  const [userOpen, setUserOpen] = useState(false);
console.log(user);
//   const isLoggedIn = true;
//   const username = "Prashanth";


  return (
	<header>
	<div className="bg-gray-100 py-1">
		<div className="container">
			<div className="flex flex-wrap">
				<div className="md:w-1/2 w-full text-center md:text-left"><span>Super Value Deals - Save more with coupons</span>
				</div>
			</div>
		</div>
	</div>
	<div className="pt-2">
			<div className="container">
				<div className="flex flex-wrap w-full items-center justify-between">
					<div className="lg:w-1/6 md:w-1/2 w-2/5 logo">
						<Link className="navbar-brand text-gray-800 dark:text-white-800  text-lg" to="/">
							<img src={sunrise} 
								alt="Sunrise cart" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
						</Link>
					</div>
					<div className="lg:w-2/5 hidden lg:block">
						<form action="#">
							<div className="relative">
								<label htmlFor="searchProducts" className="invisible hidden">Search</label>
								<input
									className="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base"
									type="search" placeholder="Search for products" />
								<button className="absolute right-0 top-0 p-3" type="button">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16"
										height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
										<path d="M21 21l-6 -6" />
									</svg>
								</button>
							</div>
						</form>
					</div>
					<div className="lg:w-1/5 hidden lg:block">
						<button type="button"
							className="btn inline-flex items-center gap-x-2 bg-transparent text-gray-600 border-gray-300 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
							data-bs-toggle="modal" data-bs-target="#locationModal">
							<span className="flex items-center gap-1">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="16"
										height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
										<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
									</svg>
								</span>
								<span>Location</span>
							</span>
						</button>
					</div>
					<div className="lg:w-1/5 text-end md:w-1/2 w-3/5">
						<div className="flex gap-7 items-center justify-end">	
							{/* Wishlist */}
							<div className="relative cursor-pointer" >
							<FaRegHeart className="cursor-pointer" size={20} />
								<span className="absolute -top-2 -right-2 bg-green-500 text-white font  text-xs px-1 rounded-full">
								3
								</span>
							</div>
							{/* Cart */}
							<div className="relative cursor-pointer" onClick={onCartClick} cart={cartItems}>
								<FaShoppingCart size={20} />
								<span className="absolute -top-2 -right-2 bg-green-500 text-white font-semibold text-xs px-1 rounded-full">
								
								{cartLength}
								</span>
							</div>

							{/* User */}
							<Link to="/login"><Button>Login</Button></Link>
							<div className="relative">
								<div
								className="flex items-center gap-2 cursor-pointer"
								onClick={() => setUserOpen(!userOpen)}
								>
								<FaRegUser size={20}/>
								{user?.user.isAuthenticated && <span>{user?.user.first_name}</span>}
								</div>

								{/* Dropdown */}
								{userOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white shadow rounded p-2">
									<p className="p-2 hover:bg-gray-100 cursor-pointer">Profile</p>
									<p className="p-2 hover:bg-gray-100 cursor-pointer">Settings</p>
									<p className="p-2 hover:bg-gray-100 cursor-pointer text-red-500">
									Logout
									</p>
								</div>
								)}
							</div>
							<div className="lg:hidden leading-none">
								<button className="collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default"
									aria-controls="navbar-default" aria-label="Toggle navigation">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2 text-gray-800"
										width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 6l16 0" />
										<path d="M4 12l16 0" />
										<path d="M4 18l16 0" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
    <nav className="navbar relative navbar-expand-lg lg:flex lg:flex-wrap items-center content-between text-black navbar-default"
			aria-label="Offcanvas navbar large">
			<div className="container max-w-8xl mx-auto w-full xl:px-4 lg:px-0">
				<div className="offcanvas offcanvas-left lg:visible" tabIndex="-1" id="navbar-default">
					<div className="offcanvas-header pb-1 logo">
						<Link to="/"><img src={sunrise} style={{ height: '80px', width: 'auto', objectFit: 'contain' }} alt="Sunrise Cart" /></Link>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
							<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x text-gray-700" width="24"
								height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
								strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M18 6l-12 12" />
								<path d="M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="offcanvas-body lg:flex lg:items-center">
						<div className="block lg:hidden mb-4">
							<form action="#">
								<div className="relative">
									<label htmlFor="searhNavbar" className="invisible hidden">Search</label>
									<input
										className="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base"
										type="search" placeholder="Search for products" id="searhNavbar" />
									<button className="absolute right-0 top-0 p-3" type="button">
										<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16"
											height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
											strokeLinecap="round" strokeLinejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
											<path d="M21 21l-6 -6" />
										</svg>
									</button>
								</div>
							</form>
						</div>
						<div className="block lg:hidden mb-4">
							<a className="btn inline-flex items-center gap-x-2 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 justify-center"
								data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
								aria-controls="collapseExample">
								<span className="mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="16"
										height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
									</svg>
								</span>
								All Departments
							</a>
							<div className="collapse mt-2" id="collapseExample">
								<div className="card card-body">
									<ul className="list-unstyled">
										<li><a className="dropdown-item" href="#!">Dairy, Bread & Eggs</a></li>
										<li><a className="dropdown-item" href="#!">Snacks & Munchies</a></li>
										<li><a className="dropdown-item" href="#!">Fruits & Vegetables</a></li>
										<li><a className="dropdown-item" href="#!">Cold Drinks & Juices</a></li>
										<li><a className="dropdown-item" href="#!">Breakfast & Instant Food</a></li>
										<li><a className="dropdown-item" href="#!">Bakery & Biscuits</a></li>
										<li><a className="dropdown-item" href="#!">Chicken, Meat & Fish</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="dropdown hidden lg:block">
							<button
								className="mr-4 btn inline-flex items-center gap-x-2 bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
								type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="16"
										height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
										strokeLinecap="round" strokeLinejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
										<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
									</svg>
								</span>
								All Departments
							</button>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#!">Dairy, Bread & Eggs</a></li>
								<li><a className="dropdown-item" href="#!">Snacks & Munchies</a></li>
								<li><a className="dropdown-item" href="#!">Fruits & Vegetables</a></li>
								<li><a className="dropdown-item" href="#!">Cold Drinks & Juices</a></li>
								<li><a className="dropdown-item" href="#!">Breakfast & Instant Food</a></li>
								<li><a className="dropdown-item" href="#!">Bakery & Biscuits</a></li>
								<li><a className="dropdown-item" href="#!">Chicken, Meat & Fish</a></li>
							</ul>
						</div>
						<div>
							<ul className="navbar-nav lg:flex gap-3 lg:items-center">
								<li className="nav-item dropdown w-full lg:w-auto">
									<Link className="nav-link " to="/">Home</Link>

								</li>
								<li className="nav-item dropdown w-full lg:w-auto">
									<Link className="nav-link " to="/about">About Us</Link>

								</li>
								<li className="nav-item dropdown w-full lg:w-auto">
									<Link className="nav-link " to="/contact">Contact Us</Link>

								</li>
								<li className="nav-item dropdown w-full lg:w-auto">
									<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
										aria-expanded="false">Dropdown Menu</a>
									<ul className="dropdown-menu">

										<li>
											<a className="dropdown-item" href="#!">
												Dropdown Link

											</a>
										</li>
									</ul>
								</li>


							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
  );
}
export default Navbar