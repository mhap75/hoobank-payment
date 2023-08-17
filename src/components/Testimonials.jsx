import { quotes } from "../assets";
import { feedback } from "../constants";
import { H2 } from "./";

const Testimonials = () => {
	return (
		<section id="clients" className="paddingY flexCenter flex-col relative">
			<div className="animate-slow-pulse absolute w-2/3 h-2/3 rounded-full -right-1/2 blue__gradient" />

			<div className="w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
				<H2 row1="What people are" row2="saying about us" />
				<div className="w-full mt-6 md:mt-0">
					<p className="paragraph text-left max-w-[450px]">
						Everything you need to accept card payments and grow
						your business anywhere on the planet.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap !justify-center sm:justify-start w-full feedback-container relative z-[1] sm:gap-10 my-5">
				{feedback.map((f) => (
					<FeedbackCard key={f.id} {...f} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;

const FeedbackCard = ({ content, name, title, img }) => (
	<div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 feedback-card">
		<img
			src={quotes}
			alt="double quotes"
			className="w-[42px] h-[27px] object-contain"
		/>
		<p className="font-normal text-[18px] leading-[32px] my-10">
			{content}
		</p>
		<div className="flex">
			<img
				src={img}
				alt={title}
				className="w-[48px] h-[48px] rounded-full"
			/>
			<div className="flex flex-col ml-4">
				<h4 className="font-semibold">{name}</h4>
			</div>
		</div>
	</div>
);
