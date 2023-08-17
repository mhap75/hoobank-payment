import { clients } from "../constants";
const Clients = () => {
	return (
		<section className="flexCenter my-4">
			<div className="flexCenter flex-wrap w-full">
				{clients.map((cl) => (
					<div
						key={cl.id}
						className="flex-1 flexCenter min-w-[120px] sm:min-w-[192px]"
					>
						<img
							src={cl.logo}
							alt={cl.id}
							className="w-[100px] sm:w-[192px] object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
