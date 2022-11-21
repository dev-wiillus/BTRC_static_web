import Image from "next/image";

interface AdCardProps {
	title: string;
	subTitle: string;
	image: string;
	description: string[];
}

export default function AdCard({
	title,
	subTitle,
	image,
	description,
}: AdCardProps) {
	return (
		<div className="flex w-[312px] flex-col items-center gap-y-6 bg-white text-center md:w-[360px]">
			<div className="mt-8">
				<p className="text-[16px] font-medium">
					<span>{subTitle}</span>
				</p>
				<p className=" text-[32px] font-semibold">
					<span>{title}</span>
				</p>
			</div>
			<Image
				src={image}
				alt={`${title}-image`}
				width={80}
				height={218}
				priority
			/>
			<div className="p-4 pt-0 text-left font-bold text-secondary md:px-10 md:pb-6">
				{description?.map((desc, index) => (
					<p key={index}>{desc}</p>
				))}
			</div>
		</div>
	);
}
