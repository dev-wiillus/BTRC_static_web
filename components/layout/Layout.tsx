import Header from "./Header";

function Layout({ children }: any) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
