import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type props = {
    children: ReactNode
}

const Main = ({ children }: props) => {
    return (
        <>
            <Navbar />
            <main className="text-white mx-5">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Main;