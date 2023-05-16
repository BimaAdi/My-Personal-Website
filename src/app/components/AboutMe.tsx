const AboutMe = () => {
    return (
        <section
            style={{ height: "500px" }}
            className="w-100 flex flex-col items-center justify-center"
        >
            <h2 className="text-center text-3xl pb-5">About Me</h2>
            <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
            <p className="mt-5 w-11/12 md:w-9/12 lg:w-7/12 text-justify text-lg">
                I am Software Engineer from Bandung Indonesia with 3 years working experience,
                currently work at Quantus Telematika Indonesia. I am exicited to
                explore new technology, it&apos;s feels like adventure for me. I think
                a good software engineer must explore new technology. New tech always
                come every year. If we don&apos;t keep up with technology, we will
                leave behind.
            </p>
        </section>
    )
}

export default AboutMe;