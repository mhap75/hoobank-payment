import { Button } from "./";

const CTA = () => {
	return (
		<section className="flexCenter marginY padding flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow">
			<div className="flex-1 flex flex-col">
				<h2 className="heading2">Let&apos;s try our service now!</h2>
				<p className="paragraph max-w-[470px] mt-5">
					All the essential tools expanding your business globally,
					accessible from anywhere on the planet.
				</p>
			</div>

			<div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
				<Button>Get Started</Button>
			</div>
		</section>
	);
};

export default CTA;
