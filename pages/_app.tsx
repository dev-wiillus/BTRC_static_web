import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { NotificationContextProvider } from "../store/notification-context";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
			
					gtag('config', '${process.env.GA_TRACKING_ID}');
				`}
			</Script>
			<NotificationContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</NotificationContextProvider>
		</>
	);
}
