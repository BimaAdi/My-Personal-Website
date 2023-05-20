const WorkingExperience = () => {
    return (
        <section
            style={{ height: "400px" }}
            className="w-100 flex flex-col items-center justify-center"
        >
            <h2 className="text-center text-3xl pb-5">Working Experience</h2>
            <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
            {/* <div className="mt-5" style={{width: "600px", marginLeft: "200px"}}> */}
            <div className="mt-5">
                <div className="w-100 flex items-center" style={{height: "100px"}}>
                    <div className="w-5 h-full hidden sm:block">
                        <div className="h-1/2"></div>
                        <div className="h-1/2 bg-gray rounded-t-lg"></div>
                    </div>
                    <div className="mx-5">
                        <h2><b>Quantus Telematika Indonesia</b></h2>
                        <p className="text-lg">Software Engineer 2020 - now</p>
                    </div>
                </div>
                <div className="w-100 flex items-center" style={{height: "100px"}}>
                    <div className="w-5 h-full hidden sm:block">
                        <div className="h-1/2 bg-gray rounded-b-lg"></div>
                        <div className="h-1/2"></div>
                    </div>
                    <div className="mx-5">
                        <h2><b>Lembaga Ilmu Pengetahuan Indonesia LIPI</b></h2>
                        <p className="text-lg">Backend Developer 2019</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkingExperience;