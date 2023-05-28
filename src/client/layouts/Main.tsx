import { ReactNode } from "react";
import Navbar from "@/client/components/Navbar";
import Footer from "@/client/components/Footer";

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