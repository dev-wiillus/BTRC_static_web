import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
	return (
		<div className="md:mx-xl flex h-full min-h-screen flex-col md:container">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
