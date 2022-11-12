import Image from "next/image";
import Button from "../components/ui/Button";
import Quote from "../components/ui/main/Quote";

export default function Home(props: any) {
	return (
		<div>
			<div className="flex h-screen flex-col bg-[url('../public/images/main/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/main/bg_web.png')]">
				<div className="mt-auto mb-20 mr-6">
					<p className="whitespace-pre-line text-right font-hero-hangle text-4xl text-text-light-primary">
						<h1>
							지금 우리의 <br />
							리얼리-사이클
						</h1>
					</p>
					<p className="mt-1 text-right font-chaney text-4xl text-primary">
						<h1>#BTRC</h1>
					</p>
				</div>
				z
			</div>
			<div className="flex h-screen flex-col">
				<div className="text-3xl font-bold">
					<h1>해볼래?</h1>
					<h1>누구나 할 수 있어.</h1>
				</div>
			</div>
			<div className="flex h-screen flex-col bg-primary">
				<div className="text-center text-3xl font-black text-white">
					<div className="mt-20">
						<h1>가장 쉬운 실천,</h1>
						<h1>Free Drink와 함께</h1>
					</div>
					<h1 className="mt-16">#BTRC</h1>
				</div>
				{/* <div className="rotate-[-15deg] text-white">
					<h3 className="font-chaney text-[2rem] font-normal">SOCIAL-IMPACT</h3>
					<h3 className="font-chaney text-[10rem] font-normal">LIVES</h3>
				</div> */}
			</div>
			<div className="flex h-screen flex-col items-center gap-y-12 bg-[url('../public/images/main/bg_esg_mobile.png')] pt-[4.5rem] md:bg-[url('../public/images/main/bg_esg_web.png')]">
				<div className="text-center text-4xl font-bold">
					<h1 className="text-3xl font-medium">텀블러와 함께</h1>
					<h1>하루 1번</h1>
					<h1>2년이면</h1>
				</div>
				<div className="flex flex-col gap-y-2 text-right">
					<div className="relative h-[487px] w-[312px] bg-[url('../public/images/main/chart_esg_mobile.png')] md:h-[487px] md:w-[432px] md:bg-[url('../public/images/main/chart_esg_web.png')]" />

					<span className="text-base font-medium text-text-gray-primary">
						출처: 기후변화행동연구소
					</span>
				</div>
			</div>
			<div className="flex h-screen flex-col items-center gap-y-10 py-20">
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
			<Quote />
			<div className="flex flex-col px-6">
				<div className="text-2xl font-bold">
					<p className="text-base font-normal text-primary">COMING SOON</p>
					<div className="mt-2">
						<h1>텀블러 기부하고 수익까지!</h1>
						<h1>
							<span className="font-normal">#BTRC</span>의 신규 프로젝트에
						</h1>
						<h1>함께 해보세요.</h1>
					</div>
				</div>
				<div className="mt-10 mb-20 flex flex-col gap-y-2">
					<Button className="btn-primary">사전 예약하기</Button>
					<Button className="">자세히 알아보기</Button>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// fetch data from an API

	return {
		props: {},
	};
}
