import Image from "next/image";
import useRevealAnimation from "../../utils/useRevealAnimation";

export default function Guide() {
	useRevealAnimation();
	return (
		<section className="relative flex min-h-screen flex-col items-center py-40 text-center md:h-[2446px] md:py-0">
			<div className="reveal fade-bottom my-48 text-[40px] font-bold leading-[44px] md:mt-60 md:text-secondary">
				<h1>해볼래?</h1>
				<h1>누구나 할 수 있어.</h1>
			</div>

			<div
				className="absolute top-[379px] hidden w-full md:block md:bg-[url('../public/images/main/guide_line_web.png')] md:bg-center"
				style={{ height: "-webkit-fill-available" }}
			/>
			<div className="md:hidden">
				<div className="reveal fade-bottom my-48 font-bold">
					<span className="text-[64px]">받고,</span>
					<div className="mt-[32px]">
						<Image
							src="/images/main/guide_get.png"
							width={300}
							height={224.89}
							alt="guide-get"
						/>
					</div>
					<p className="mt-[32px] text-[24px] leading-[28.8px] text-text-gray-primary">
						원하는 텀블러에
						<br />
						무료커피 받고
					</p>
				</div>
				<div className="reveal fade-bottom my-48 font-bold">
					<span className="text-[64px] font-bold">즐기고,</span>
					<div className="mt-[32px]">
						<Image
							src="/images/main/guide_drink.png"
							width={300}
							height={224.89}
							alt="guide-drink"
						/>
					</div>
					<p className="mt-[32px] text-[24px] leading-[28.8px] text-text-gray-primary">
						일주일간
						<br />
						즐기고
					</p>
				</div>
				<div className="reveal fade-bottom my-48 font-bold">
					<span className="text-[64px] font-bold">반납하고,</span>
					<div className="mt-[32px]">
						<Image
							src="/images/main/guide_return.png"
							width={300}
							height={224.89}
							alt="guide-return"
						/>
					</div>
					<p className="mt-[32px] text-[24px] leading-[28.8px] text-text-gray-primary">
						BTRC 스팟에
						<br />
						반납하고
					</p>
				</div>
			</div>

			<div className="my-24 hidden h-[250px] w-full flex-col gap-y-[279px] px-[250px] font-bold md:flex md:items-center">
				<div className="reveal fade-right flex w-[540px] flex-1 gap-x-[52px]">
					<div className="relative h-[224.89px] w-[300px] rounded-[1rem]">
						<Image src="/images/main/guide_get.png" fill alt="guide-get" />
					</div>
					<div className="w-[220px]">
						<span className="text-[56px]">받고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							원하는 텀블러에
							<br />
							무료커피 받고
						</p>
					</div>
				</div>
				<div className="reveal fade-left mr-20 flex w-[595px] flex-1 gap-x-[79px]">
					<div className="w-[220px]">
						<span className="text-[56px]">즐기고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							일주일간
							<br />
							즐기고
						</p>
					</div>
					<div className="relative h-[224.89px] w-[300px] rounded-[1rem]">
						<Image src="/images/main/guide_drink.png" fill alt="guide-drink" />
					</div>
				</div>
				<div className="reveal fade-right flex w-[600px] flex-1 gap-x-[115px]">
					<div className="relative h-[224.89px] w-[300px] rounded-[1rem]">
						<Image
							src="/images/main/guide_return.png"
							fill
							alt="guide-return"
						/>
					</div>
					<div className="w-[240px]">
						<span className="text-[56px]">반납하고,</span>
						<p className="mt-[42px] text-[24px] font-semibold text-text-gray-primary">
							BTRC 스팟에
							<br />
							반납하고
						</p>
					</div>
				</div>
			</div>

			<div className="reveal fade-bottom my-48 text-[40px] font-bold leading-[45px] md:absolute md:bottom-[0px] md:text-white">
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
