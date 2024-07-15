import { AiOutlineStop } from "react-icons/ai";

const NotFound = () => {
	return (
		<div
			className="relative grid justify-center items-center text-white"
			style={{ width: "100vw", height: "100vh", zIndex: "1" }}
		>
			<div
				className="flex text-secondary items-center"
				style={{ height: "60px" }}
			>
				<AiOutlineStop
					style={{
						display: "block",
						margin: "auto",
						width: "60px",
						height: "60px",
					}}
				/>
				<div className="w-2 bg-white h-full mx-5"></div>
				<div>
					<h3 className="text-2xl md:text-5xl">Page Not Found</h3>
					{/* work around link not working */}
					<a href="/">Go To Home Page</a>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
