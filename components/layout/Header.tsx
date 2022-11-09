import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="absolute flex h-[56px] w-full items-center justify-between px-4">
			<div className="header__logo">
				<Link href="/">
					<Image src="/BTRC_logo.png" alt="Logo" width={101} height={30} />
				</Link>
			</div>
			<Navigation />
		</header>
	);
}

export default Header;
