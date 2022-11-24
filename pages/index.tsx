import Head from "next/head";
import { Fragment } from "react";
import Brand from "../components/ui/main/Brand";
import ESG from "../components/ui/main/ESG";
import Guide from "../components/ui/main/Guide";
import Hero from "../components/ui/main/Hero";
import Identity from "../components/ui/main/Identity";
import Quote from "../components/ui/main/Quote";
import Wakecup from "../components/ui/main/Wakecup";

// TODO: add favicon
export default function HomePage(props: any) {
	return (
		<Fragment>
			<Head>
				<title>BTRC | 지금 우리의 리얼리-사이클</title>
				<meta
					name="description"
					content="가장 쉬운 실천 #텀블러 #아메리카노 #커피 #광고"
				/>
			</Head>
			<Hero />
			<Guide />
			<Identity />
			<div className="grid grid-cols-1 md:grid-cols-2">
				<ESG />
				<Brand />
			</div>
			<Quote />
			<Wakecup />
		</Fragment>
	);
}
