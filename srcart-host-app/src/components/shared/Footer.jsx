const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
	<div className="container">
		<div className="flex flex-wrap md:gap-4 lg:gap-0 py-4 mb-6">
        <div className="w-full md:w-full lg:w-1/3 flex flex-col gap-4 mb-6">
				<h6>Categories</h6>
				<div className="flex flex-wrap">
					<div className="w-1/2">
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Vegetables & Fruits</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Bakery & Biscuits</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Atta, rice & dal</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Baby care</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Personal care</a></li>
						</ul>
					</div>
					<div className="w-1/2">
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Dairy, bread & eggs</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Cold drinks & juices</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Tea, coffee & drinks</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Chicken, meat & fish</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Pet care</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full md:w-full lg:w-2/3">
				<div className="flex flex-wrap">
					<div className="w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-4 mb-6">
						<h6>Get to know us</h6>
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Company</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">About</a></li>
							<li><a href="#!" className="inline-block">Blog</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Help Center</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Our Value</a></li>
						</ul>
					</div>
					<div className="w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-4 mb-6">
						<h6>For Consumers</h6>
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Payments</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Shipping</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Product Returns</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">FAQ</a></li>
							<li><a href="#!" className="inline-block">Shop Checkout</a></li>
						</ul>
					</div>
					<div className="w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-4">
						<h6>Become a Shopper</h6>
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Shopper Opportunities</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Become a Shopper</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Earnings</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Ideas & Guides</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">New Retailers</a></li>
						</ul>
					</div>
					<div className="w-1/2 sm:w-1/2 md:w-1/4 flex flex-col gap-4">
						<h6>Freshcart programs</h6>
						<ul className="flex flex-col gap-2">
							<li><a href="#!" className="inline-block hover:text-green-600">Freshcart programs</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Gift Cards</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Promos & Coupons</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Freshcart Ads</a></li>
							<li><a href="#!" className="inline-block hover:text-green-600">Careers</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        <div className="border-t py-4 border-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="md:w-1/2">
                <span className="text-sm text-gray-500">
                    ©&nbsp;
                    SRHCart Powered by 
                    <a href="#" target="_blank" className="text-green-600"> SRH</a>
                </span>
            </div>
        </div>
        </div>
	</div>
    
</footer>
  )
}

export default Footer