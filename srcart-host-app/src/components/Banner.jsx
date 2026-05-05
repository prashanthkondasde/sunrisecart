import banner1 from '../assets/images/banner/grocery-banner.png'
import banner2 from '../assets/images/banner/grocery-banner-2.jpg'


const Banner = () => {
  return (
        <section>
			<div className="container">
				<div className="flex md:space-x-2 lg:space-x-6 flex-wrap md:flex-nowrap">
					<div className="w-full md:w-1/2 mb-3 lg:">
						<div className="py-10 px-8 rounded-lg"
							style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-1">
									<h2 className="font-bold text-xl">Fruits & Vegetables</h2>
									<p>
										Get Upto
										<span className="font-bold text-gray-800"> 30% </span>
										Off
									</p>
								</div>

								<div className="flex flex-wrap">
									<a href="#!"
										className="btn inline-flex items-center gap-x-2 bg-gray-800 text-white border-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-900 active:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<div className="py-10 px-8 rounded-lg"
							style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-1">
									<h2 className="font-bold text-xl">Freshly Baked Buns</h2>
									<p>
										Get Upto
										<span className="font-bold text-gray-800"> 25% </span>
										Off
									</p>
								</div>

								<div className="flex flex-wrap">
									<a href="#!"
										className="btn inline-flex items-center gap-x-2 bg-gray-800 text-white border-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-900 active:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
										Shop Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Banner