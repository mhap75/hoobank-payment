import { discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
	<section id="home" className="flex md:flex-row flex-col paddingY ">
		<div className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6">
			<div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img
					src={discount}
					alt="discount"
					className="w-[32px] h-[32px]"
				/>
				<p className="paragraph">
					<span className="text-white">20%</span> Discount for{" "}
					<span className="text-white">1 Month</span> Per Account
				</p>
			</div>

			<div className="flex justify-between items-center w-full">
				<h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
					The Next <br className="sm:block hidden" />
					<span className="text-gradient">Generation</span> Payment
					Method.
				</h1>
				<div className="ss:flex hidden md:mr-4 mr-0">
					<GetStarted />
				</div>
			</div>
		</div>
	</section>
);

export default Hero;