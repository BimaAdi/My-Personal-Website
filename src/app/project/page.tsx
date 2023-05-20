import OnProgress from "@/app/components/OnProgress"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Project() {
    return (
        <div className="w-screen h-screen relative grid justify-center items-center text-white">
            <Navbar />
            <OnProgress />
            <div className="absolute w-full" style={{bottom: "0"}}>
                <Footer />
            </div>
        </div>
    )
}