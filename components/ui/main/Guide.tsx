import Image from "next/image";
import useRevealAnimation from "../../utils/useRevealAnimation";

export default function Guide() {
	useRevealAnimation();
	return (
		<section className="relative flex min-h-screen flex-col items-center py-40 text-center md:h-[2446px]">
			<div className="reveal fade-bottom my-40 text-[40px] font-bold leading-[44px] md:text-secondary">
				<h1>해볼래?</h1>
				<h1>누구나 할 수 있어.</h1>
			</div>

			<div
				className="absolute top-[455px] hidden w-full md:block md:bg-[url('../public/images/main/identity_line_web.png')]"
				style={{ height: "-webkit-fill-available" }}
			/>
			<div className="md:hidden">
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px]">받고,</span>
					<div className="mt-[53px]">
						<Image
							src="/images/main/identity_grab.png"
							width={302.6}
							height={275}
							alt="identity-grab"
						/>
					</div>
					<p className="mt-[73px] text-[24px] leading-[28.8px] text-text-gray-primary">
						원하는 텀블러에
						<br />
						무료커피 받고
					</p>
				</div>
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px] font-bold">즐기고,</span>
					<div className="mt-[53px]">
						<Image
							src="/images/main/identity_put.png"
							width={302.6}
							height={275}
							alt="identity-put"
						/>
					</div>
					<p className="mt-[73px] text-[24px] leading-[28.8px] text-text-gray-primary">
						일주일간
						<br />
						즐기고
					</p>
				</div>
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px] font-bold">반납하고,</span>
					<div className="mt-[53px]">
						<Image
							src="/images/main/identity_put.png"
							width={302.6}
							height={275}
							alt="identity-put"
						/>
					</div>
					<p className="mt-[73px] text-[24px] leading-[28.8px] text-text-gray-primary">
						BTRC 스팟에
						<br />
						반납하고
					</p>
				</div>
			</div>

			<div className="my-36 hidden h-[250px] w-full flex-col gap-y-[200px] px-[250px] font-bold md:flex">
				<div className="reveal fade-right flex flex-1 gap-x-[120px] self-start">
					<div className="relative h-[275px] w-[302.6px] rounded-[1rem]">
						<Image
							src="/images/main/identity_grab.png"
							fill
							alt="identity-grab"
						/>
					</div>
					<div>
						<span className="text-[56px]">받고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							원하는 텀블러에
							<br />
							무료커피 받고
						</p>
					</div>
				</div>
				<div className="reveal fade-left flex flex-1 gap-x-[120px] self-end">
					<div>
						<span className="text-[56px]">즐기고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							일주일간
							<br />
							즐기고
						</p>
					</div>
					<div className="relative h-[275px] w-[302.6px] rounded-[1rem]">
						<Image
							src="/images/main/identity_put.png"
							fill
							alt="identity-grab"
						/>
					</div>
				</div>
				<div className="reveal fade-right flex flex-1 gap-x-[120px] self-start">
					<div className="relative h-[275px] w-[302.6px] rounded-[1rem]">
						<Image
							src="/images/main/identity_grab.png"
							fill
							alt="identity-grab"
						/>
					</div>
					<div>
						<span className="text-[56px]">반납하고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							BTRC 스팟에
							<br />
							반납하고
						</p>
					</div>
				</div>
			</div>

			<div className="reveal fade-bottom my-40 text-[40px] font-bold leading-[45px] md:absolute md:bottom-[0px] md:text-white">
				<h1 className="mb-4 text-[32px] font-medium">그리고</h1>
				<h1>세척과 살균은</h1>
				<h1>
					<span className="font-chaney text-[36px] font-normal">BTRC</span>가
					<span className="hidden md:ml-3 md:inline-block"> 해줄게.</span>
				</h1>
			</div>
		</section>
	);
}
