import { FaTools } from "react-icons/fa"

const OnProgress = () => {
    return (
        <div className="flex text-secondary items-center" style={{ height: "60px" }}>
            <FaTools style={{
                display: "block",
                margin: "auto",
                width: "60px",
                height: "60px",
            }} />
            <div className="w-2 bg-white h-full mx-5"></div>
            <h3 className="text-3xl md:text-5xl">On Progress</h3>
        </div>
    )
}

export default OnProgress