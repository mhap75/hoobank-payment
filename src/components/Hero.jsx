import { discount, robot } from "../assets";
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
					<span className="text-gradient">Generation</span>
				</h1>
				<div className="ss:flex hidden md:mr-4 mr-0">
					<GetStarted />
				</div>
			</div>

			<h2 className="font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
				Payment Method
			</h2>
			<p className="paragraph max-w-[470px] mt-5">
				Our team of experts uses a methodology to identify the credit
				cards most likely to fit your needs. We examine annual
				percentage rates, annual fees.
			</p>
		</div>

		<div className="relative flexCenter flex-1 md:my-0 my-10">
			<div>
				<img
					src={robot}
					alt="billing"
					className="w-full h-full relative z-10"
				/>
			</div>
			<div className="animate-pulse absolute w-[40%] h-[35%] top-0 pink__gradient" />
			<div className="animate-pulse absolute w-[80%] h-[80%] bottom-40 z-[1] rounded-full white__gradient" />
			<div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
		</div>
		<div className="ss:hidden flexCenter">
			<GetStarted />
		</div>
	</section>
);

export default Hero;
