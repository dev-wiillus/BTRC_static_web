import Image from "next/image";

interface quoteOptionProps {
	name: string;
	age: number;
	image?: string;
	title: string;
	description: string;
}

const quoteOptions: quoteOptionProps[] = [
	{
		name: "김민정",
		age: 20,
		image: "minjung.png",
		title: "추천하고 싶은 완전 재밌는 프로젝트!",
		description:
			"의미 있는 활동에 동참하고 있다는 기분,	위트 있는 광고들도 재미가 쏠쏠한 BTRC!",
	},
	{
		name: "김유림",
		age: 20,
		image: "yurim.png",
		title: "커피를 즐기는 가장 재밌는 경험",
		description:
			"최애 카페의 커피를 무료로 마실 수 있다니요, 제발 한 번, 두 번, 세 번하세요!",
	},
	{
		name: "서한교",
		age: 30,
		image: "hangyo.png",
		title: "세상에서 가장 기분 좋은 커피 한 잔",
		description: "출근길과 함께하는 BTRC, 특히 월요병을 날리기에 딱 이에요.",
	},
];

export default function QuoteCarousel() {
	return (
		<div className="carousel-center carousel rounded-box sm:space-x-3">
			{quoteOptions.map(({ name, age, image, title, description }, index) => (
				<div
					className="carousel-item card mt-10 w-full bg-gray-50 shadow-xl sm:w-1/2 sm:shadow-none lg:w-1/3"
					key={index}
				>
					<div className="mt-4 flex flex-col items-center">
						<div className="avatar">
							<div className="w-[8.5rem] overflow-hidden rounded-full bg-avartar-empty">
								<Image src={`/images/main/quote-${image}`} alt="avatar" fill />
							</div>
						</div>
						<div className="mt-2 flex gap-x-2 text-base font-semibold">
							<div>
								{name.replace(new RegExp(name[name.length - 1] + "$"), "*")}
							</div>
							<div>{age}대</div>
						</div>
					</div>
					<div className="card-body break-keep">
						<h2 className="card-title text-[18px] font-bold md:text-[28px]">
							{title}
						</h2>
						<p className="text-[16px] font-medium text-text-gray-primary md:text-[18px]">
							{description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
