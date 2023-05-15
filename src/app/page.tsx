import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white mx-5">
      {/* Hero */}
      <section
        style={{ height: "800px" }}
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
        className="w-100 flex-col items-center"
      >
        <h2 className="text-center text-3xl pb-5">About Me</h2>
        <div
          style={{ marginLeft: "25%", marginRight: "25%" }}
          className="border-b-2 border-solid border-secondary"
        ></div>
        <p className="text-justify text-lg mx-5 md:mx-28 lg:mx-36 xl:mx-36 2xl:mx-36 mt-5">
          I am Software Engineer from Bandung with 3 years working experience,
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
        className="w-100 flex-col items-center"
      >
        <h2 className="text-center text-3xl pb-5">Working Experience</h2>
        <div
          style={{ marginLeft: "25%", marginRight: "25%" }}
          className="border-b-2 border-solid border-secondary"
        ></div>
        <p className="text-justify text-lg mx-5 md:mx-28 lg:mx-36 xl:mx-36 2xl:mx-36 mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          cupiditate animi vitae! Atque recusandae deserunt expedita corrupti
          numquam eum esse laborum qui, odit ad delectus necessitatibus nobis.
          Accusamus, eveniet distinctio?
        </p>
      </section>

      {/* Tech Stack */}
      <section
        style={{ height: "500px" }}
        className="w-100 flex-col items-center"
      >
        <h2 className="text-center text-3xl pb-5">Tech Stack</h2>
        <div
          style={{ marginLeft: "25%", marginRight: "25%" }}
          className="border-b-2 border-solid border-secondary"
        ></div>
        <p className="text-justify text-lg mx-5 md:mx-28 lg:mx-36 xl:mx-36 2xl:mx-36 mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          velit adipisci quae? Magni aut quis nostrum quibusdam iste quidem
          dolores, natus laborum odit vero, aliquam neque ipsa nihil nisi
          pariatur.
        </p>
      </section>

      {/* Contact Me */}
      <section
        style={{ height: "500px" }}
        className="w-100 flex-col items-center"
      >
        <h2 className="text-center text-3xl pb-5">Contact Me</h2>
        <div
          style={{ marginLeft: "25%", marginRight: "25%" }}
          className="border-b-2 border-solid border-secondary"
        ></div>
        <p className="text-justify text-lg mx-5 md:mx-28 lg:mx-36 xl:mx-36 2xl:mx-36 mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          velit adipisci quae? Magni aut quis nostrum quibusdam iste quidem
          dolores, natus laborum odit vero, aliquam neque ipsa nihil nisi
          pariatur.
        </p>
      </section>
    </div>
  );
}
