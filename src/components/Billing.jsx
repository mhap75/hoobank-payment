import { google, bill, apple } from "../assets";

const Billing = () => {
	return (
		<section id="product" className="layout-sectionReverse">
			<div className="layout-sectionImgReverse">
				<img
					src={bill}
					alt="billing"
					className="w-full h-full relative z-[5]"
				/>
				<div className="animate-slow-pulse absolute w-1/2 h-1/2 top-0 rounded-full z-[3] -left-1/2 white__gradient" />
				<div className="animate-slow-pulse absolute w-1/2 h-1/2 bottom-0 -left-1/2 rounded-full pink__gradient" />
			</div>

			<div className="layout-sectionInfo">
				<h2 className="heading2">
					Easily control your <br className="sm:block hidden" />
					billing & invoicing.
				</h2>
				<p className="paragraph max-w-[470px] mt-5">
					Take charge of your billing and invoicing with
					Hoobank&apos;s intuitive platform. Simplify financial
					transactions and eliminate manual processes for effortless
					financial management.
				</p>

				<div className="flex flex-wrap mt-6 sm:mt-10 gap-5">
					{[google, apple].map((im, ix) => (
						<img
							key={ix}
							src={im}
							alt="app store"
							className={
								"w-[128px] h-[42px] cursor-pointer object-contain rounded-xl shadow shadow-sky-900"
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Billing;
