import Image from "next/image";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

export default function Project() {
	return (
		<div className="w-100 text-white p-2">
			<div className="max-w-md bg-gray border-solid border-2 border-gray rounded-lg">
				<Image
					src="/My Personal Website.png"
					alt="bima"
					className="w-full rounded-lg"
					width={1000}
					height={600}
				/>
				<div className="p-2">
					<div className="text-justify">This personal website</div>
					<div className="w-100 flex justify-end align-middle">
						<AiOutlineLink
							style={{
								display: "block",
								width: "30px",
								height: "30px",
							}}
						/>
						<AiFillGithub
							style={{
								display: "block",
								width: "30px",
								height: "30px",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
