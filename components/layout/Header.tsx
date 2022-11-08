import Navigation from "./Navigation";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
