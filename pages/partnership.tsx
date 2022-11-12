import AdCard from "../components/ui/AdCard";
import Button from "../components/ui/Button";

export default function Partnership() {
	return (
		<>
			<div className="flex h-screen flex-col bg-[url('../public/images/partnership/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/partnership/bg_web.png')]">
				<div className="mt-auto mb-20 mr-6 text-right text-4xl md:text-7xl ">
					<p className="whitespace-pre-line font-hero-hangle text-text-light-primary">
						<h1>
							누구보다 <br />
							가까이
						</h1>
					</p>
					<p className="font-chaney text-primary">
						<h1>#BTRC</h1>
					</p>
				</div>
			</div>
			<div className="bg-secondary px-6 pt-20 pb-[7.5rem]">
				<div className="flex flex-col items-center">
					<div className="text-[24px] font-bold text-text-light-primary md:text-[40px]">
						<h1>광고 이용 안내</h1>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
						<AdCard
							title="베이직 플랜"
							subTitle="여러 브랜드와 함께 노출되는"
							image="/images/partnership/basic_plan.png"
							description={[
								"캠페인 기간동안 최소 100~300명(선택)에게 텀블러 배포",
								"최소 노출 효과 1,000~3,000명 예상",
							]}
						/>
						<AdCard
							title="프리미엄 플랜"
							subTitle="브랜드 단독으로 노출되는"
							image="/images/partnership/premium_plan.png"
							description={[
								"캠페인 기간동안 최소 300명에게 텀블러 배포",
								"최소 노출 효과 3,000명 예상",
							]}
						/>
						<div className="mt-2 text-right text-sm text-text-light-primary md:col-span-2">
							*광고 기획 및 제작 별로 비용 발생
						</div>
					</div>
					<div className="mt-10 w-full max-w-[312px]">
						<Button className="btn-primary">광고 문의</Button>
					</div>
				</div>
			</div>
		</>
	);
}
