import { features } from "../constants";
import { Button } from "./";

const FeatureCard = ({ icon, title, content }) => (
	<div className="flex p-6 rounded-[20px] group-last:mb-6 mb-0 feature-card">
		<div className="w-[64px] aspect-square rounded-full flexCenter bg-dimBlue">
			<img
				src={icon}
				alt={title}
				className="w-1/2 h-1/2 object-contain"
			/>
		</div>
		<div className="flex flex-1 flex-col ml-3 justify-center">
			<h4 className="font-semibold text-[18px] leading-[23px] mb-1">
				{title}
			</h4>
			<p className="font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
				{content}
			</p>
		</div>
	</div>
);

const Business = () => {
	return (
		<section id="features" className="layout-section">
			<div className="sectionInfo">
				<h2 className="heading2">
					You do the business,
					<br className="sm:block  hidden" />
					we&#8217;ll handle the money
				</h2>
				<p className="paragraph max-w-[470px] mt-5">
					With the right credit card, you can improve your financial
					life by building credit, earning rewards and saving money.
					But with hundreds of credit cards on the market.
				</p>
				<Button classes="mt-10">Get Started</Button>
			</div>

			<div className="sectionImg flex-col group">
				{features.map((f) => (
					<FeatureCard key={f.id} {...f} />
				))}
			</div>
		</section>
	);
};

export default Business;
