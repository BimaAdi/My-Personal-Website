"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type props = {
    children: ReactNode
}

const Full = ({ children }: props) => {
    return (
        <div className="w-screen h-screen relative grid justify-center items-center text-white">
            <Navbar />
            {children}
            <div className="absolute w-full" style={{bottom: "0"}}>
                <Footer />
            </div>
        </div>
    )
}

export default Full;