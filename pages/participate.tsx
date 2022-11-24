/* hidden page */

import Head from "next/head";
import { Fragment } from "react";
import ServiceApplication from "../components/ui/modal/ServiceApplication";

export default function ParticipatePage() {
	return (
		<Fragment>
			<Head>
				<title>BTRC | 참여하기</title>
				<meta name="description" content="무료 아메리카노 받기 #텀블러 #커피" />
			</Head>
			<ServiceApplication />
		</Fragment>
	);
}
