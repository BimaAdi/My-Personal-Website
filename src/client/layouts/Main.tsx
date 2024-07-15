import { ReactNode } from "react";
import Navbar from "@/client/components/Navbar";
import Footer from "@/client/components/Footer";

type props = {
	children: ReactNode;
	addNavbarBuffer?: boolean;
	addFooterBuffer?: boolean;
};

const Main = ({
	children,
	addNavbarBuffer = true,
	addFooterBuffer = true,
}: props) => {
	return (
		<div style={{ minHeight: "100vh", position: "relative" }}>
			<Navbar />
			{/* navbar buffer */}
			{addNavbarBuffer ? <div style={{ height: "70px" }}></div> : <></>}
			{children}
			{/* footer buffer */}
			{addFooterBuffer ? <div style={{ height: "70px" }}></div> : <></>}
			<Footer />
		</div>
	);
};

export default Main;
