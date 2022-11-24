import Head from "next/head";
import { Fragment } from "react";
import WakecupApplication from "../components/ui/modal/WakecupApplication";
import Guide from "../components/ui/wakecup/Guide";
import Hero from "../components/ui/wakecup/Hero";
import Reservation from "../components/ui/wakecup/Reservation";

export default function WakecupPage() {
	return (
		<Fragment>
			<Head>
				<title>BTRC | 텀블러 공유</title>
				<meta
					name="description"
					content="잠든 가치를 깨우는 움직임 #텀블러 #기부 #공유 #wakecup"
				/>
			</Head>
			<Hero />
			<Guide />
			<Reservation />
			<WakecupApplication />
		</Fragment>
	);
}
