import { arrowUp } from "../assets";

const GetStarted = () => {
	return (
		<div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
			<div className="flexCenter flex-col bg-primary w-full h-full rounded-full">
				<div className="flexCenter gap-1">
					<p className="font-medium text-[18px] leading-[32px]">
						<span className="text-gradient">Get</span>
					</p>
					<img
						src={arrowUp}
						alt="get started"
						className="w-[23px] h-[23px] object-contain"
					/>
				</div>
				<p className="font-medium text-[18px] leading-[32px]">
					<span className="text-gradient">Started</span>
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
