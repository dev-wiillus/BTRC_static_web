import AdCard from "../components/ui/AdCard";
import Button from "../components/ui/Button";

export default function Partnership() {
	return (
		<>
			<div className="flex h-screen flex-col bg-[url('../public/partnership_bg.png')]">
				<div className="mt-auto mb-20 mr-6">
					<p className="whitespace-pre-line text-right font-hero-hangle text-4xl text-text-light-primary">
						<h1>
							누구보다 <br />
							가까이
						</h1>
					</p>
					<p className="mt-1 text-right font-chaney text-4xl text-primary">
						<h1>#BTRC</h1>
					</p>
				</div>
			</div>
			<div className="bg-secondary px-6">
				<div className="flex flex-col items-center md:flex-row">
					<div className="mt-20 text-2xl font-bold text-text-light-primary">
						<h1>광고 이용 안내</h1>
					</div>
					<AdCard
						title="베이직 플랜"
						subTitle="여러 브랜드와 함께 노출되는"
						image="/basic_plan.png"
						description={[
							"캠페인 기간동안 최소 100~300명(선택)에게 텀블러 배포",
							"최소 노출 효과 1,000~3,000명 예상",
						]}
					/>
					<AdCard
						title="프리미엄 플랜"
						subTitle="브랜드 단독으로 노출되는"
						image="/premium_plan.png"
						description={[
							"캠페인 기간동안 최소 300명에게 텀블러 배포",
							"최소 노출 효과 3,000명 예상",
						]}
					/>
					<div className="mt-2 self-end text-sm text-text-light-primary">
						<span>*광고 기획 및 제작 별로 비용 발생</span>
					</div>
					<div className="mt-10 mb-20 w-full">
						<Button className="btn-primary">광고 문의</Button>
					</div>
				</div>
			</div>
		</>
	);
}
