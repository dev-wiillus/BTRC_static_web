import Image from "next/image";

export default function Brand() {
	return (
		<div className="mt-[72px] md:mt-[24px] md:mr-[32px] md:h-[684px] md:border-[6px] md:border-primary lg:h-[716px]">
			<div className="flex flex-col items-center gap-y-10 py-20 md:gap-y-[54px] md:pt-[40px]">
				<div className="text-center">
					<div className="flex flex-row gap-x-2 md:flex-col md:gap-x-4 md:text-primary lg:flex-row">
						<h1 className="font-chaney text-[32px] font-normal md:text-[40px] md:leading-[48px]">
							#BTRC
						</h1>
						<h1 className="text-[28px] font-black md:text-[38px] md:leading-[44px]">
							참여 브랜드
						</h1>
					</div>
					<h3 className="text-[16px] font-medium text-text-gray-primary md:text-[14px]">
						2022년 12월 기준
					</h3>
				</div>
				<div className="flex flex-col items-center gap-y-8 md:gap-y-[50px]">
					<div className="relative h-[27.17px] w-[87.54px] md:h-[44px] md:w-[143px]">
						<Image src="/images/logo/SOCAR.png" alt="brand-SOCAR" fill />
					</div>
					<div className="relative h-[27.17px] w-[86.79px] md:h-[43px] md:w-[141px]">
						<Image src="/images/logo/FRIP.png" alt="brand-FRIP" fill />
					</div>
					<div className="relative h-[19.62px] w-[143.39px] md:h-[33px] md:w-[231px]">
						<Image
							src="/images/logo/FRESHCODE.png"
							alt="brand-FRESHCODE"
							fill
						/>
					</div>
					<div className="relative h-[47.54px] w-[66.41px] md:h-[75px] md:w-[108px]">
						<Image
							src="/images/logo/HEYGROUND.png"
							alt="brand-HEYGROUND"
							fill
						/>
					</div>
					<div className="relative h-[24.9px] w-[128.29px] md:h-[40px] md:w-[208px]">
						<Image
							src="/images/logo/Skelter-Labs.png"
							alt="brand-Skelter-Labs"
							fill
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
