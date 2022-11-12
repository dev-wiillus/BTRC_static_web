import Image from "next/image";

// TODO: bottom 패딩 값이 부족
function Footer() {
	return (
		<footer className="flex h-[259px] w-full flex-col gap-y-6 bg-black py-10 pl-8 md:h-[303px]">
			<div className="flex flex-col gap-y-2.5">
				<Image
					src="/images/logo/Wiillus.png"
					alt="Logo"
					width={59}
					height={22}
				/>
				<div className="flex flex-col gap-y-2.5 text-2xs text-text-secondary">
					<p>
						<span>대표 이해찬 | hello@wiillus.com</span>
					</p>
					<p>
						<span>주소: 서울시 용산구 이태원로 223-5 2층</span>
					</p>
					<p>
						<span>개인정보처리담당 김창민 | robin@wiillus.com</span>
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 text-2xs font-semibold text-text-light-primary">
				{/* TODO: 기능 필요 */}
				<p>
					<span>개인정보 처리방침</span>
				</p>
				<p>
					<span>Contact</span>
				</p>
			</div>
			<div className="text-3xs text-text-secondary">
				<span>Copyright © 2022 Wiillus All Rights Reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
