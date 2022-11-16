function NotFoundPage() {
	return (
		<div className="flex h-full flex-col items-center gap-y-3 pt-[50%] md:pt-[30%]">
			<h1 className="text-xl font-bold">페이지를 찾을 수 없습니다.</h1>
			<p className="text-lg font-medium text-text-secondary">
				경로가 잘못되었습니다.
			</p>
		</div>
	);
}

export default NotFoundPage;
