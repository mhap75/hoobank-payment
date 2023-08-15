import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img src={logo} alt="Hoobank Home" className="w-[124px] h-[32px]" />
			<NavLinks containerClasses="sm:flex hidden" innerClasses="mr-10" />
			{/* Mobile Hamburger Menu */}
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={isMenuOpen ? close : menu}
					alt="mobile menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setIsMenuOpen((s) => !s)}
				/>

				<div
					className={`${
						isMenuOpen ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<NavLinks
						containerClasses="flex flex-col"
						innerClasses="mb-4"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

const NavLinks = ({ containerClasses, innerClasses = "" }) => (
	<ul
		className={`list-none justify-end items-center flex-1 ${containerClasses}`}
	>
		{navLinks.map((nL, ix) => (
			<li
				key={nL.id}
				className={`font-normal cursor-pointer text-[16px] ${
					ix === navLinks.length - 1 ? "mr-0" : innerClasses
				}`}
			>
				<a href={`#${nL.id}`}>{nL.title}</a>
			</li>
		))}
	</ul>
);
