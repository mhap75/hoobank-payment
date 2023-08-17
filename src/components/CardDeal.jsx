import { card } from "../assets";
import { Button, H2 } from "./";

const CardDeal = () => {
	return (
		<section className="layout-section">
			<div className="layout-sectionInfo">
				<H2
					row1="Find a better card deal"
					row2="in just a few steps."
				/>
				<p className="paragraph max-w-[470px] mt-5">
					Discover the ideal cards deal effortlessly with a few simple
					steps. Our streamlined process ensures you find the best one
					with favorable terms and benefits.
				</p>
				<Button classes="mt-10">Get Started</Button>
			</div>

			<div className="layout-sectionImg">
				<img src={card} alt="card deals" className="w-full h-full" />
			</div>
		</section>
	);
};

export default CardDeal;
