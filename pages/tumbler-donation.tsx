import Image from "next/image";
import Button from "../components/ui/Button";
import TumblerDonation from "../components/ui/modal/TumblerDonation";

export default function TumblerDonationPage() {
	return (
		<>
			<div className="flex h-screen flex-col bg-[url('../public/wakecup_mobile_bg.png')]">
				<div className="mt-auto mb-20 ml-6">
					<p className="whitespace-pre-line font-hero-hangle text-4xl text-text-light-primary">
						<h1>
							잠든 가치를 <br />
							깨우는 움직임
						</h1>
					</p>
					<p className="mt-1 font-chaney text-4xl text-primary">
						<h1>#WAKECUP</h1>
					</p>
					<label htmlFor="my-modal-3" className="btn-primary btn mt-10">
						사전 예약하기
					</label>
				</div>
			</div>
			<div className="flex flex-col">
				<div>
					<p>사용하지 않는 텀블러가</p>
					<p>가치를 갖기 시작합니다.</p>
				</div>
				<div>
					<Image
						src="/wakecup_tumblers.png"
						alt="wakecup_tumblers"
						width={360}
						height={99}
					/>
					<div>당신의 잠든 텀블러를 기부하세요.</div>
				</div>
				<div>
					<Image
						src="/wakecup_revenue.png"
						alt="wakecup_revenue"
						width={200}
						height={157}
					/>
					<div>
						<p>쓰여진 횟수만큼</p>
						<p>매년 수익금이 착!</p>
					</div>
					<div>매출의 일부를 수익으로 나눠드립니다.</div>
				</div>
				<div>
					<Image
						src="/wakecup_usage.png"
						alt="wakecup_usage"
						width={232}
						height={147}
					/>
					<div>
						<p>몇 번 사용되었는지</p>
						<p>한눈에!</p>
					</div>
				</div>
			</div>
			<div>
				<p>당신과 곧 만날</p>
				<p>#WAKECUP 프로젝트에</p>
				<p>미리 참여하세요.</p>
				<Button>사전 예약하기</Button>
			</div>
			<TumblerDonation />
		</>
	);
}
