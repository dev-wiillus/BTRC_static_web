import IdentityTypo from "../IdentityTypo";

export default function Identity() {
	return (
		<div className="h-[800px] overflow-hidden bg-primary text-white md:h-[720px]">
			<div className="flex h-full flex-col overflow-hidden md:hidden">
				<div className="text-center text-3xl font-black">
					<div className="mt-20">
						<h1>가장 쉬운 실천,</h1>
						<h1>Free Drink와 함께</h1>
					</div>
					<h1 className="mt-16 font-chaney font-normal">#BTRC</h1>
				</div>
				<div className="mt-auto mb-[200px] whitespace-nowrap">
					<IdentityTypo />
				</div>
			</div>
			<div className="relative hidden h-full md:block">
				<div className="flex pt-[22px] font-chaney text-[32px] font-black">
					<div className="flex flex-1 flex-col overflow-hidden">
						<div className="ml-[23px]">
							<h1>#BTRC</h1>
						</div>
						<div className="mt-[-30px] mb-[60px] whitespace-nowrap">
							<IdentityTypo />
						</div>
						<div className="mb-[60px] whitespace-nowrap">
							<IdentityTypo />
						</div>
						<div className="mb-[60px] whitespace-nowrap">
							<IdentityTypo />
						</div>
					</div>
					<div className="flex flex-1 justify-around">
						<h1>#BTRC</h1>
						<h1>#BTRC</h1>
					</div>
				</div>
				<div className="absolute right-[40px] bottom-[40px] bg-white px-2 text-[40px] font-bold leading-[48px] text-primary">
					<h1>가장 쉬운 실천,</h1>
					<h1>Free Drink와 함께</h1>
				</div>
			</div>
		</div>
	);
}
