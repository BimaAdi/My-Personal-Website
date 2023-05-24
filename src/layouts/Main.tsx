import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type props = {
    children: ReactNode
}

const Main = ({ children }: props) => {
    return (
        <div style={{minHeight: "100vh", position: "relative"}}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Main;