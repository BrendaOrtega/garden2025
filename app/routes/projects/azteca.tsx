import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function azteca() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-white">
      <Navbar />
      <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-4 md:pt-16  pb-20">
        <div className="w-full bg-azteca h-[280px] md:h-[680px] overflow-hidden rounded-[40px]  bg-cover flex items-center">
          <img
            className="h-auto w-full md:w-[80%] mx-auto  "
            src="/projects/azteca/cover.png"
            alt="project cover"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-azteca"> Projects </span> ⇢{" "}
                <span className="text-black"> Laboratorios Azteca </span>
              </p>
            </Link>
            <a
              href="https://ui.fixtergeek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-28 md:w-[140px] hover:scale-90 transition-all"
                src="/projects/azteca/logo.png"
                alt="logo azteca"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="UI Design" />
              <Tag variant="outline" label="Prototyping" />
              <Tag variant="outline" label="App" />

              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              May -July 2023
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UX & UI Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Laboratorios Azteca is a{" "}
              <span className="text-azteca">leading medical diagnostics</span>{" "}
              provider in Mexico City and the State of Mexico, offering a wide
              range of clinical laboratory services. As part of Grupo
              Diagnóstico Aries, Laboratorios Azteca is committed to delivering
              high-quality healthcare services and is recognized for its
              leadership in clinical analysis, particularly in forensic science
              and toxicology.
            </p>

            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The laboratory offers a comprehensive spectrum of diagnostic
              tests, including blood tests, urinalysis, imaging services like
              X-rays, and specialized analyses.{" "}
              <span className="text-azteca">
                Patients can conveniently schedule appointments and access their
                results online through the laboratory's digital platforms.
              </span>{" "}
              Laboratorios Azteca's dedication to accessible and reliable
              diagnostics has made it a trusted choice for individuals and
              healthcare providers seeking accurate and timely medical testing.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The project's goal was renovate the User Interface improving the
              user journey, usability and user experience in general.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className=" text-3xl md:text-4xl font-bold font-title text-dark ">
            UI Design Process
          </h2>
          <p className="text-xl  mt-6 mb-12">
            Since the brand guidelines were provided by the company, I started
            with a card sorting session to define the sitemap and then moved on
            to the style guide and wireframes.
          </p>
          <img
            className=" object-cover h-auto w-full md:w-[80%] mx-auto"
            src="/projects/azteca/img6.png"
            alt="sitemap"
          />{" "}
          <h4 className="font-semibold text-2xl my-6">
            Style guide & Components
          </h4>
          <div className="w-full  grid grid-cols-1 md:grid-cols-5  box-border items-start  overflow-hidden">
            <img
              className="col-span-1 md:col-span-2"
              src="/projects/azteca/img1.png"
              alt="style guide"
            />
            <div className="col-span-1 md:col-span-3    ">
              <img
                className=" object-cover h-auto"
                src="/projects/azteca/img2.png"
                alt="components"
              />
              <img
                className=" object-cover h-auto "
                src="/projects/azteca/img3.png"
                alt="aniamtions"
              />
            </div>
          </div>
          <h4 className="font-semibold text-2xl mt-20 mb-6">
            Features collage
          </h4>
          <img
            className=" object-cover h-auto mb-20"
            src="/projects/azteca/img7.png"
            alt="screens"
          />
          <h4 className="font-semibold text-2xl mt-6">Prototypes</h4>
          <div className="flex w-full items-start overflow-hidden">
            <img
              className="w-1/2 h-auto"
              src="/projects/azteca/img4.png"
              alt="web prototype"
            />
            <img
              className="w-1/2 h-auto"
              src="/projects/azteca/img5.png"
              alt="mobile prototype"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Next steps
          </h2>
          <p className="text-xl dark:text-iron-300 mt-6">
            The next step is to code the platform to analyze the metrics (sales,
            users views, conversions, top products, success rate, etc) and
            continue iterating.
          </p>
          <img
            className="w-20 mt-6"
            src="/projects/fixterorg/fur.png"
            alt="fur"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
