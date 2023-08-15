import {
	Billing,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	Hero,
} from "./components";

const App = () => (
	<main className="bg-primary w-full overflow-hidden">
		<div className="paddingX flexCenter">
			<div className="boxWidth">
				<Navbar />
			</div>
		</div>

		<div className="bg-primary flexStart">
			<div className="boxWidth">
				<Hero />
			</div>
		</div>

		<div className="bg-primary paddingX flexStart">
			<div className="boxWidth">
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</main>
);

export default App;
