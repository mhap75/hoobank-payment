import { stats } from "../constants";

const Stats = () => (
	<section className="flexCenter flex-wrap mb-6 sm:mb-20">
		{stats.map((s) => (
			<div
				key={s.id}
				className="flex flex-1 justify-start items-center m-3"
			>
				<h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
					{s.value}
				</h4>
				<p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
					{s.title}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
