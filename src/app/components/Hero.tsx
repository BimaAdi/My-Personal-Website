import Image from "next/image";

const Hero = () => {
    return (
        <section
            style={{ height: "600px" }}
            className="w-full flex justify-center items-center"
        >
            <div className="flex flex-col md:flex-row justify-center items-center">
                <Image
                    src="/bima.jpeg"
                    alt="bima"
                    width={200}
                    height={200}
                    className="m-5 rounded-full border-2 border-solid border-secondary"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl text-center md:text-left">
                        Muhammad Bima Adi Prabowo
                    </h1>
                    <p className="text-lg text-center md:text-left">
                        Software Engineer / Backend Developer
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;