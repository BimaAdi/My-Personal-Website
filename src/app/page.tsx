import Image from "next/image";
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

export default function Home() {
  return (
    <div className="text-white mx-5">
      {/* Hero */}
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

      {/* About Me */}
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

      {/* Working Experience */}
      <section
        style={{ height: "500px" }}
        className="w-100 flex flex-col items-center justify-center"
      >
        <h2 className="text-center text-3xl pb-5">Working Experience</h2>
        <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
        <p className="mt-5 w-11/12 md:w-9/12 lg:w-7/12 text-justify text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          cupiditate animi vitae! Atque recusandae deserunt expedita corrupti
          numquam eum esse laborum qui, odit ad delectus necessitatibus nobis.
          Accusamus, eveniet distinctio?
        </p>
      </section>

      {/* Tech Stack */}
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

      {/* Contact Me */}
      <section
        style={{ height: "500px" }}
        className="w-100 flex flex-col items-center justify-center"
      >
        <h2 className="text-center text-3xl pb-5">Contact Me</h2>
        <div className="h-0.5 w-3/12 border-b-2 bg-secondary"></div>
        <p className="mt-5 w-11/12 md:w-9/12 lg:w-7/12 text-justify text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          velit adipisci quae? Magni aut quis nostrum quibusdam iste quidem
          dolores, natus laborum odit vero, aliquam neque ipsa nihil nisi
          pariatur.
        </p>
      </section>
    </div>
  );
}
