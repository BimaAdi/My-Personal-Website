import { FaReact, FaNodeJs, FaPython, FaLaravel, FaPhp } from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiFastapi,
    SiDjango,
    SiPostgresql,
    SiRedis,
    SiElasticsearch,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const TechStack = () => {
    return (
        <section className="w-100 flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl pb-5">Tech Stack</h2>
            <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
            <div className="mt-5 w-11/12 md:w-9/12 lg:w-7/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-3 justify-center items-center gap-2">
                {/* Tech Item */}
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <FaReact
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>React JS</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiNextdotjs
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Next JS</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiTypescript
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Typescript</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <FaNodeJs
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Node JS</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiFastapi
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>FastApi</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiDjango
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Django</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <FaPython
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Python</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <FaLaravel
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Laravel</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <FaPhp
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>PHP</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <TbBrandGolang
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Golang</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiPostgresql
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Postgresql</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiRedis
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Redis</b>
                    </p>
                </div>
                <div className="bg-gray text-center text-secondary p-2 rounded-lg">
                    <SiElasticsearch
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "100px",
                            height: "100px",
                        }}
                    />
                    <p>
                        <b>Elasticsearch</b>
                    </p>
                </div>
                {/* End Tech Item */}
            </div>
        </section>
    )
}

export default TechStack;