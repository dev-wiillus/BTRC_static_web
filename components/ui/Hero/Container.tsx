import ResponsiveImage from "../ResponsiveImage";

type InputProps = {
	children: React.ReactNode;
	bgSrcMobile: string;
	bgSrcWeb: string;
	title: string;
};

export default function Container({
	children,
	bgSrcMobile,
	bgSrcWeb,
	title,
}: InputProps) {
	return (
		<div className="relative flex h-screen flex-col md:h-[720px]">
			<ResponsiveImage
				mobile={{
					src: bgSrcMobile,
					alt: title,
					fill: true,
					objectFit: "cover",
					objectPosition: "center",
					className: "z-[-1]",
				}}
				web={{
					src: bgSrcWeb,
					alt: title,
					fill: true,
					objectFit: "cover",
					objectPosition: "center",
					className: "z-[-1]",
				}}
			/>
			{children}
		</div>
	);
}
