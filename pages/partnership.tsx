import Head from "next/head";
import { Fragment } from "react";
import PartnershipApplication from "../components/ui/modal/PartnershipApplication";
import AdPlan from "../components/ui/partnership/AdPlan";
import Hero from "../components/ui/partnership/Hero";

export default function PartnershipPage() {
	return (
		<Fragment>
			<Head>
				<title>#BTRC | 파트너십</title>
				<meta name="description" content="누구보다 가까이 #파트너십 #광고" />
			</Head>
			<Hero />
			<PartnershipApplication />
			<AdPlan />
		</Fragment>
	);
}
