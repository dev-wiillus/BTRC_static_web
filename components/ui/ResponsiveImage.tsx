import Image, { ImageProps } from "next/image";

type InputProps = {
	mobile: ImageProps;
	web: ImageProps;
};

export default function ResponsiveImage({ mobile, web }: InputProps) {
	return (
		<>
			<div className="md:hidden">
				<Image {...mobile} alt={mobile.alt} />
			</div>
			<div className="hidden md:block">
				<Image {...web} alt={web.alt} />
			</div>
		</>
	);
}
