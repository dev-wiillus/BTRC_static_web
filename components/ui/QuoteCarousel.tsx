interface quoteOptionProps {
	name: string;
	age: number;
	avartar?: string;
	title: string;
	description: string;
}

const quoteOptions: quoteOptionProps[] = [
	{
		name: "이**",
		age: 25,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
	{
		name: "김**",
		age: 22,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
	{
		name: "한**",
		age: 34,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
	{
		name: "최**",
		age: 65,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
	{
		name: "신**",
		age: 32,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
	{
		name: "황**",
		age: 24,
		title: "주제문 1줄 더미 텍스트",
		description:
			"설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄 더미 텍스트 설명문 2줄",
	},
];

export default function QuoteCarousel() {
	return (
		<div className="carousel-center carousel rounded-box md:space-x-3">
			{quoteOptions.map(({ name, age, avartar, title, description }, index) => (
				<div
					className="carousel-item card mt-10 w-full bg-gray-50 shadow-xl md:w-1/3 md:shadow-none"
					key={index}
				>
					<div className="mt-4 flex flex-col items-center">
						<div className="avatar">
							<div className="w-[8.5rem] rounded-full bg-avartar-empty"></div>
						</div>
						<div className="mt-2 text-base font-semibold">
							{name}, {age}세
						</div>
					</div>
					<div className="card-body">
						<h2 className="card-title text-[18px] font-bold">{title}</h2>
						<p className="text-[16px] font-medium text-text-gray-primary">
							{description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
