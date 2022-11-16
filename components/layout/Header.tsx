import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="absolute flex h-[56px] w-full items-center justify-between px-4 md:container md:px-10">
			<Link href="/">
				<Image src="/images/logo/BTRC.png" alt="Logo" width={101} height={30} />
			</Link>
			<Navigation />
		</header>
	);
}

export default Header;
