import Navigation from "./Navigation";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute flex h-[56px] w-full items-center justify-between px-4">
      <div className="header__logo">
        <Link href="/">
          {/* TODO: 이미지로 변경 필요 */}
          {/* <img src="/logo.svg" alt="Logo" /> */}
          <h1 className="p-2 font-chaney text-2xl text-primary">BTRC</h1>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
