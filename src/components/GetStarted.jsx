import { arrowUp } from "../assets";

const GetStarted = () => {
	return (
		<div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient relative z-10 hover:z-0 hover:shadow-none p-[2px] cursor-pointer shadow-sky-800 shad shadow-2xl transition-shadow duration-1000">
			<div className="flexCenter flex-col bg-black-gradient w-full h-full rounded-full">
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
