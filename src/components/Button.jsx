const Button = ({ children, classes }) => (
	<button
		className={`${classes} py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none rounded-xl hover:opacity-75`}
	>
		{children}
	</button>
);

export default Button;
