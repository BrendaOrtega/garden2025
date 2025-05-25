import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function uicourse() {
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
        <div className="w-full bg-[#0E0E11] h-[280px] md:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            className="h-auto w-full md:w-[80%] mx-auto "
            src="/projects/ui/cover.gif"
            alt="cover"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-brand"> Projects </span> ⇢{" "}
                <span> UI Course </span>
              </p>
            </Link>
            <a
              href="https://ui.fixtergeek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-48 md:w-[220px] hover:scale-90 transition-all"
                src="/projects/ui/Logo.png"
                alt="logo"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Landing page" />
              <Tag variant="outline" label="Figma" />
              <Tag variant="outline" label="React" />
              <Tag variant="outline" label="TailwindCSS" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              March 2024
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Product Designer & Frontend Developer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              This is the website of my own{" "}
              <span className="text-brand"> User Interface Design course</span>,
              which is part of the fixtergeek.com offer. This course is for
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
              <span className="text-brand">
                The landing page has been designed to be clear through the copy,
                structure, and visual content,
              </span>{" "}
              directly and simply presenting the information that users want to
              know about the course through effective storytelling while the
              interface seeks
              <span className="text-brand">
                {" "}
                to be attractive, efficient, consistent, and interactive.
              </span>
            </p>
          </div>
        </div>

        <img
          alt="screens"
          className="rounded-[40px] border border-white/10 mt-16 md:mt-28  "
          src="/projects/ui/img7.png"
        />
      </section>
      <Footer variant="small" />
    </main>
  );
}
