import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
	return (
		<section className="flexCenter paddingY flex-col">
			<div className="flexStart flex-col md:flex-row mb-8 w-full">
				<div className="flex-1 flex flex-col justify-start mr-10">
					<img
						src={logo}
						alt="hoobank"
						className="w-[266px] h-[72px] object-contain"
					/>
					<p className="paragraph mt-4 max-w-[310px]">
						A new way to make payments easy, reliable and secure.
					</p>
				</div>

				<div className="flex-[1.5] w-full flex justify-between flex-wrap mt-10 md:mt-0">
					{footerLinks.map((link) => (
						<div
							key={link.key}
							className="flex flex-col my-4 ss:my-0 min-w-[150px]"
						>
							<h4 className="text-[18px] leading-[27px]">
								{link.title}
							</h4>
							<ul className="list-none mt-4 flex flex-col gap-y-1">
								{link.links.map((link) => (
									<li
										key={link.name}
										className="text-dimWhite leading-[24px] hover:text-secondary cursor-pointer"
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
				<p className="text-center text-[18px] leading-[27px] text-dimWhite">
					2021 Hoobank. All rights reserved.
				</p>

				<div className="flex mt-6 md:mt-0 gap-6">
					{socialMedia.map((s) => (
						<img
							src={s.icon}
							key={s.id}
							alt={s.id}
							className="w-[21px] h-[21px]  object-contain cursor-pointer"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Footer;
