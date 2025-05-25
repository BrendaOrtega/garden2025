import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function potentiia() {
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
        <div className="w-full flex items-center bg-potentiia h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            className="h-auto w-full md:w-[80%]  mx-auto scale-75 "
            src="/projects/potentiia/cover.webp"
            alt="cover"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-potentiia"> Projects </span> ⇢{" "}
                <span> Potentiia </span>
              </p>
            </Link>
            <a
              href="https://ui.fixtergeek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-44 md:w-[200px] hover:scale-90 transition-all"
                src="/projects/potentiia/logo.webp"
                alt="logo"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="UI Design" />
              <Tag variant="outline" label="Website" />
              <Tag variant="outline" label="Figma" />
              <Tag variant="outline" label="React" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              January 2024
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UI Designer & Frontend Developer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Potentiia is a{" "}
              <span className="text-potentiia">
                personal and professional development company that applies
                sports psychology to help individuals and teams enhance their
                mental performance
              </span>{" "}
              . Through tailored programs, they focus on strengthening mindset,
              emotional resilience, and goal achievement. Their approach blends
              science-based psychological tools with coaching techniques to
              support high performance in sports, business, and everyday life.
              Potentiia works with athletes, executives, and organizations
              seeking to unlock their full potential through mental training and
              self-awareness.
            </p>

            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6"></p>
          </div>
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
