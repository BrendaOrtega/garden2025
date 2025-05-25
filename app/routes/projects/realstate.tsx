import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function realstate() {
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
      <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-16  pb-20">
        <div className="w-full bg-state h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            className="h-auto w-full md:w-[80%] mx-auto  -mt-20 scale-75"
            src="/projects/inmuebles.webp"
            alt="cover"
          />
        </div>
        <div className="min-h-54 flex justify-center items-center">
          <div>
            <img alt="logo" className="w-20 mx-auto" src="/NotFound.gif" />
            <h3>
              I'm working on this project, please come back later to see the
              final result.
            </h3>
          </div>
        </div>
        {/* <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-[#B37CF2]"> Projects </span> ⇢{" "}
                <span className="text-black"> Propiedades </span>
              </p>
            </Link>
            <a
              href="https://ui.fixtergeek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[220px] hover:scale-90 transition-all"
                src="/projects/ui/Logo.png"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Webapp" />
              <Tag variant="outline" label="Figma" />
              <Tag variant="outline" label="Prototype" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              January - March 2024
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UI Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              This is the website of my own{" "}
              <span className="text-[#B37CF2]">
                {" "}
                User Interface Design course
              </span>
              , which is part of the fixtergeek.com offer. This course is for
              designers or developers who want to master the basics of UI
              design, make better design decisions and support them with best
              practices.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              In this course, participants learn both theoretically and
              practically how to choose color palettes and typographies. They
              also learn about web elements and their use cases, current design
              trends, create a prototype, and organize and apply usability tests
              to design.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              <span className="text-[#B37CF2]">
                The landing page has been designed to be clear through the copy,
                structure, and visual content,
              </span>{" "}
              directly and simply presenting the information that users want to
              know about the course through effective storytelling while the
              interface seeks
              <span className="text-[#B37CF2]">
                {" "}
                to be attractive, efficient, consistent, and interactive.
              </span>
            </p>
          </div>
        </div> */}
        {/* <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div className="flex  items-center gap-6 ">
          <div className="w-[40%]">
            <h2 className="text-4xl font-bold font-title text-dark ">Goals</h2>
            <p className="text-xl  mt-6">
              Based on the business requeriments and user needs shared by the
              companany, the 3 main goals defined were:
            </p>
            <ul className="text-black font-bold font-title text-lg  ">
              <li>
                {" "}
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Defeine the architecture information
                </p>
              </li>
              <li>
                {" "}
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Define the style guide consistently with the brand
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Design
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Design
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Design
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Design
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[60%]">
            <img
              className="w-full object-cover"
              src="/projects/reform/img6.png"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-4xl font-bold font-title text-dark ">
            Design & Prototyping
          </h2>
          <p className="text-xl  mt-6 mb-12"></p>
          <div className="flex items-start w-full overflow-hidden">
            <img className="w-1/2 " src="/projects/reform/img1.png" />
            <img className="w-1/2 h-auto " src="/projects/reform/img2.png" />
          </div>
          <img
            className="w-full object-cover"
            src="/projects/reform/img3.png"
          />
          <img
            className="w-full object-cover"
            src="/projects/reform/img4.png"
          />
          <img
            className="w-full object-cover"
            src="/projects/reform/img5.png"
          />
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-4xl font-bold font-title text-dark ">
            Next steps
          </h2>
          <p className="text-xl  mt-6 mb-12">
            As part of the functional and performance enhancements, I
            implemented Google Analytics and Hotjar to monitor user behavior.
            This allows me to track errors, evaluate user flows, and gain
            insights into the overall user experience. I will be analyzing key
            metrics such as session duration, lead generation rates, and
            interaction patterns to identify opportunities for continuous
            improvement.
          </p>
        </div>
        <img className="w-20 mt-6" src="/projects/reform/fur.png" /> */}
      </section>
      <Footer variant="small" />
    </main>
  );
}
