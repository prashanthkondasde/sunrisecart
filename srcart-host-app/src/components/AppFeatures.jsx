import clock from '../assets/images/icons/clock.svg'
import gift from '../assets/images/icons/gift.svg'
import packageIcon from '../assets/images/icons/package.svg'
import refresh from '../assets/images/icons/refresh-cw.svg'
const AppFeatures = () => {
  return (
    <section className="lg:my-14 my-8">
			<div className="container">
				<div className="flex flex-wrap gap-y-6">
					<div className="md:w-1/2 lg:w-1/4 px-3">
						<div className="flex flex-col gap-4">
							<div className="inline-block"><img src={clock} alt="" /></div>
							<div className="flex flex-col gap-2">
								<h3 className="text-md">10 minute grocery now</h3>
								<p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
							</div>
						</div>
					</div>
					<div className="md:w-1/2 lg:w-1/4 px-3">
						<div className="flex flex-col gap-4">
							<div className="inline-block"><img src={gift} alt="" /></div>
							<div className="flex flex-col gap-2">
								<h3 className="text-md">Best Prices & Offers</h3>
								<p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &
									offers.</p>
							</div>
						</div>
					</div>
					<div className="md:w-1/2 lg:w-1/4 px-3">
						<div className="flex flex-col gap-4">
							<div className="inline-block"><img src={packageIcon} alt="" /></div>
							<div className="flex flex-col gap-2">
								<h3 className="text-md">Wide Assortment</h3>
								<p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other
									categories.</p>
							</div>
						</div>
					</div>
					<div className="md:w-1/2 lg:w-1/4 px-3">
						<div className="flex flex-col gap-4">
							<div className="inline-block"><img src={refresh} alt="" /></div>
							<div className="flex flex-col gap-2">
								<h3 className="text-md">Easy Returns</h3>
								<p>
									Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions
									asked
									<a href="#!" className="text-green-600">policy</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default AppFeatures