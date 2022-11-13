import Image from "next/image";

export default function Brand() {
	return (
		<div className="md:h-[720px] md:border-[50px] md:border-secondary">
			<div className="flex flex-col items-center gap-y-10 py-20 md:py-[117px]">
				<div className="text-center">
					<h1>
						<span className="font-chaney text-[32px] font-medium">#BTRC</span>{" "}
						<span className="text-[28px] font-black">참여 브랜드</span>
					</h1>
					<h3 className="text-[16px] font-medium text-text-gray-primary">
						2022년 12월 기준
					</h3>
				</div>
				<div className="flex flex-col items-center gap-y-8">
					<Image
						src="/images/logo/SOCAR.png"
						alt="brand-SOCAR"
						width={87.54}
						height={27.17}
					/>
					<Image
						src="/images/logo/FRIP.png"
						alt="brand-FRIP"
						width={86.79}
						height={27.17}
					/>
					<Image
						src="/images/logo/FRESHCODE.png"
						alt="brand-FRESHCODE"
						width={143.39}
						height={19.62}
					/>
					<Image
						src="/images/logo/HEYGROUND.png"
						alt="brand-HEYGROUND"
						width={66.41}
						height={47.54}
					/>
					<Image
						src="/images/logo/Skelter-Labs.png"
						alt="brand-Skelter-Labs"
						width={128.29}
						height={24.9}
					/>
				</div>
			</div>
		</div>
	);
}
