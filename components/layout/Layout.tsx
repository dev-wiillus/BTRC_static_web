import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
  return (
    <div className="md:mx-xl h-full md:container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
