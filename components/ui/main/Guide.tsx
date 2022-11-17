import { useEffect } from "react";

export default function Guide() {
	function reveal() {
		var reveals = document.querySelectorAll(".reveal");

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", reveal);
	}, []);

	return (
		<section className="flex min-h-screen flex-col items-center justify-center py-40 text-center">
			<div className="reveal fade-bottom my-40 text-[40px] font-bold leading-[44px]">
				<h1>해볼래?</h1>
				<h1>누구나 할 수 있어.</h1>
			</div>

			<div className="md:hidden">
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px]">받고,</span>
					<p className="mt-[73px] text-[30px] leading-[36px] text-text-gray-primary">
						원하는 텀블러에
						<br />
						무료커피 받고
					</p>
				</div>
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px] font-bold">즐기고,</span>
					<p className="mt-[73px] text-[30px] leading-[36px] text-text-gray-primary">
						일주일간
						<br />
						즐기고
					</p>
				</div>
				<div className="reveal fade-bottom my-40 font-bold">
					<span className="text-[64px] font-bold">반납하고,</span>
					<p className="mt-[73px] text-[30px] leading-[36px] text-text-gray-primary">
						BTRC 스팟에
						<br />
						반납하고
					</p>
				</div>
			</div>

			<div className="reveal fade-bottom my-40 hidden h-[250px] w-full items-center font-bold md:flex">
				<div className="flex-1">
					<span className="animate-[highlight-action1_8s_linear_infinite]">
						받고,
					</span>
					<p className="mt-[73px] animate-[highlight-text1_8s_linear_infinite] text-text-gray-primary">
						원하는 텀블러에
						<br />
						무료커피 받고
					</p>
				</div>
				<div className="flex-1">
					<span className="animate-[highlight-action2_8s_linear_infinite]">
						즐기고,
					</span>
					<p className="mt-[73px] animate-[highlight-text2_8s_linear_infinite] text-text-gray-primary">
						일주일간
						<br />
						즐기고
					</p>
				</div>
				<div className="flex-1">
					<span className="animate-[highlight-action3_8s_linear_infinite]">
						반납하고,
					</span>
					<p className="mt-[73px] animate-[highlight-text3_8s_linear_infinite] text-text-gray-primary">
						BTRC 스팟에
						<br />
						반납하고
					</p>
				</div>
			</div>

			<div className="reveal fade-bottom my-40 text-[40px] font-bold leading-[45px]">
				<h1 className="mb-4 text-[32px] font-medium">그리고</h1>
				<h1>세척과 살균은</h1>
				<h1>
					<span className="font-chaney text-[36px] font-normal">BTRC</span>가
					<span className="hidden md:ml-3 md:inline-block"> 해줄게.</span>
				</h1>
			</div>
		</section>
	);
}
