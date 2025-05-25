import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function fixterorg() {
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
        <div className="w-full bg-fixter h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            alt="cover"
            className="h-auto w-full md:w-[80%] mx-auto scale-75 "
            src="/projects/org.webp"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-fixter-secondary"> Projects </span>{" "}
                ⇢ <span> Fixter.org</span>
              </p>
            </Link>
            <a
              href="https://fixter.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-32 md:w-[160px] hover:scale-90 transition-all"
                src="/projects/fixterorg/logo.png"
              />
            </a>

            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Website" />
              <Tag variant="outline" label="Product Design" />
              <Tag variant="outline" label="Figma" />
              <Tag variant="outline" label="ReactJs" />
              <Tag variant="outline" label="TailwindCSS" />
            </div>
            <p className=" font-semibold font-title text-xl mt-10 mb-1">Date</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Octubre 2023
            </p>
            <p className=" font-semibold font-title text-xl mt-10 mb-1">Role</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UX/UI Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Fixter.org is a{" "}
              <span className="text-fixter-secondary"> consultancy agency</span>{" "}
              that offers IT services like web design,
              <span className="text-fixter-secondary">
                {" "}
                web development, UX/UI services, mobile apps development, and
                programming language training courses at affordable prices.
              </span>{" "}
            </p>
            <p className="text-xl md:text-2xl mt-6 dark:text-iron-300">
              Recently, Fixter.org's decided to use analytics data to improve
              the user experience of their website. At the same time they began
              to update the brand guidelines, and they also decided to add new
              features such as an online quotation for their clients’ projects
              and show the list of Software As A Service created by them, Since
              the old website didn't have the architecture to display the new
              information, it was necessary to design a new website without
              change the tone and voice brand.
            </p>
            <p className="text-xl md:text-2xl mt-6 dark:text-iron-300">
              My challenge in this project was{" "}
              <span className="text-fixter-secondary">
                to redesign the website interface looking for a modern, simple,
                visual, and interactive look and feel.
              </span>
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            UI Design
          </h2>
          <p className="text-xl dark:text-iron-300 mt-6">
            These are the old website mockups designed before the interface
            updates and the mockups after new brand guidelines were applied. The
            update included changes in the interface elements and UI patterns.
          </p>
          <div className="mt-10">
            <img alt="website " src="/projects/fixterorg/img1.png" />
            <img alt="website" src="/projects/fixterorg/img2.png" />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Next steps
          </h2>
          <p className="text-xl dark:text-iron-300 mt-6">
            The next steps are to organize user tests periodically as well as to
            track the website's analytics (including users, views, conversions,
            session time) to identify points in need of improvement and improve
            the usability and efficiency of the website.
          </p>
          <img
            alt="fur"
            className="w-20 mt-6"
            src="/projects/fixterorg/fur.png"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
