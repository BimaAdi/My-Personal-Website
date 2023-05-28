import { FaTools } from "react-icons/fa"

const OnProgress = () => {
    return (
        <div className="relative grid justify-center items-center text-white" 
            style={{width: "100vw", height: "100vh", zIndex: "-1"}}>
            <div className="flex text-secondary items-center" style={{ height: "60px" }}>
                <FaTools style={{
                    display: "block",
                    margin: "auto",
                    width: "60px",
                    height: "60px",
                }} />
                <div className="w-2 bg-white h-full mx-5"></div>
                <h3 id="onProgress" className="text-3xl md:text-5xl">On Progress</h3>
            </div>
        </div>
    )
}

export default OnProgress