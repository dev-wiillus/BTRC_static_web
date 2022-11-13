import Brand from "../components/ui/main/Brand";
import ESG from "../components/ui/main/ESG";
import Guide from "../components/ui/main/Guide";
import Hero from "../components/ui/main/Hero";
import Identity from "../components/ui/main/Identity";
import Quote from "../components/ui/main/Quote";
import Wakecup from "../components/ui/main/Wakecup";

export default function Home(props: any) {
	return (
		<div>
			<Hero />
			<Guide />
			<Identity />
			<div className="grid grid-cols-1 md:grid-cols-2">
				<ESG />
				<Brand />
			</div>
			<Quote />
			<Wakecup />
		</div>
	);
}

export async function getStaticProps() {
	// fetch data from an API

	return {
		props: {},
	};
}
