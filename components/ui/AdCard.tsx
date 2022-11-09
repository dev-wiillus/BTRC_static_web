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
		<div className="mt-10 flex flex-col items-center gap-y-6 bg-white text-center">
			<div className="mt-8">
				<p className="font-medium">
					<span>{subTitle}</span>
				</p>
				<p className="text-3xl font-semibold">
					<span>{title}</span>
				</p>
			</div>
			<Image src={image} alt={`${title}-image`} width={80} height={218} />
			<div className="p-4 pt-0 text-left font-bold text-secondary">
				{description?.map((desc, index) => (
					<p key={index}>{desc}</p>
				))}
			</div>
		</div>
	);
}
