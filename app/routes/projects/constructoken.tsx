import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function constructoken() {
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
        <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-token">
          <img
            className="h-auto w-full md:w-[70%] mx-auto "
            src="/projects/constructoken/cover.webp"
            alt="project cover"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-dark text-xs absolute -top-10">
                <span className="text-dark hover:text-token-secondary font-bold">
                  {" "}
                  Projects{" "}
                </span>{" "}
                ⇢ <span className="text-dark"> Constructoken</span>
              </p>
            </Link>
            <a
              href="https://constructoken.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-52 md:w-[240px] hover:scale-90 grayscale-25 transition-all"
                src="/projects/constructoken/constru_logo.webp"
                alt="logo constructoken"
              />
            </a>

            <div className="flex gap-4 mt-6">
              <Tag variant="outline" label="Mobile App" />
              <Tag variant="outline" label="UI Design" />
              <Tag variant="outline" label="Fintech" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-dark font-bold text-xl mt-10 mb-1 font-title">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              October 2023 - January 2024
            </p>
            <p className="text-dark font-bold text-xl mt-10 mb-1 font-title">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Product Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Constructoken is a{" "}
              <span className="text-token-secondary">Fintech Startup</span>{" "}
              seeks to{" "}
              <span className="text-token-secondary">
                {" "}
                provide an alternative to bank financing for people who want to
                construct a home or renovate their current homes
              </span>{" "}
              from any place in Mexico our the United States. And looking to
              provide a complete experience, Constructoken offers other services
              to their clients like location based automatic quotations
              (considering local prices), standard house plans, and attractive
              rewards to users who meet their construction goals.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              Clients carry out each part of the construction independently,
              from making the plan of the construction, procuring materials, to
              supervising the work. To help users with this complicated process,
              it was necessary to know their needs in each part of the process
              and identify at which points Construtoken can help them in a way
              that is useful to users and gives them the value necessary to use
              it.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark ">
            Understanding the problem
          </h2>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            To fully understand the problem areas around the auto production
            housing process, I carried out three different research tasks to
            collect as much information as possible. These were:
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[280px]"
                src="/projects/constructoken/img04.webp"
                alt="benchmark"
              />
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                <strong className="font-title">Desktop research </strong> of
                similar products or services in the market; we found three
                direct competitors: Construrama, Keobra, and Criptoladrillo.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[280px] object-cover"
                src="/projects/constructoken/img05.webp"
                alt="interviews"
              />
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                Application of{" "}
                <strong className="font-title">
                  quantitative interviews and qualitative surveys{" "}
                </strong>
                in 4 different cities in Mexico to identify goals and needs.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
              <img
                className="rounded-2xl h-[280px] object-cover"
                src="/projects/constructoken/img06.webp"
                alt="sketch"
              />
              <p className="text-xl dark:text-iron-300 mt-6">
                {" "}
                <strong className="font-title">Contextual observation</strong>,
                identifying the pains and needs in each step of the
                autoconstruction process.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark ">
            Generating Personas
          </h2>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            After gleaning valuable insights from the 'understand' phase,
            plotting an affinity diagram and an empathy map, I formed two
            personas. These were created to help craft a better experience later
            down the line in the ideation stage.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
            <div className="w-full md:w-[380px] grow">
              <img
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/constructoken/img07.webp"
                alt="user"
              />
              <p className="text-base dark:text-iron-300 mt-8">
                {" "}
                Emiliano is a user who wants to build his house but he doesn't
                have access to traditional bank financial products.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
                src="/projects/constructoken/img08.webp"
                alt="user"
              />
              <p className="text-base dark:text-iron-300 mt-8">
                {" "}
                Luis lives in the United States and has been planning to build a
                house in Mexico for a long time, but finds it difficult to make
                much progress from the United States.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark ">
            Definition & Ideation
          </h2>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            After looking at data, analyzing user needs, creating personas to
            match these insights, and discussing business requirements, I moved
            on to the definition & ideating stage. These were done in three
            parts:
            <p />
            <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
              <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
                <img
                  className="rounded-2xl h-[240px] object-cover border border-black/10"
                  src="/projects/constructoken/img10.jpg"
                  alt="moscow example"
                />
                <h3 className="text-black font-semibold font-title text-xl mt-6">
                  MoSCoW method
                </h3>
                <p className="text-xl dark:text-iron-300 mt-2">
                  {" "}
                  After working with the product and development team on a value
                  proposition canvas and defining the user stories, I moved
                  forward to prioritize the features with the MoSCoW method.
                </p>
              </div>

              <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
                <img
                  className="rounded-2xl h-[240px] object-cover"
                  src="/projects/constructoken/img13.jpg"
                  alt="sitemap"
                />
                <h3 className="text-black font-semibold font-title text-xl mt-6">
                  Site map
                </h3>
                <p className="text-xl dark:text-iron-300 mt-2">
                  {" "}
                  Having identify the prioritized features, I worked on the app
                  architecture.
                </p>
              </div>
              <div className="w-full md:w-[380px] grow  hover:-translate-y-4 transition-all">
                <img
                  className="rounded-2xl h-[240px] object-cover"
                  src="/projects/constructoken/img14.webp"
                  alt="userflow"
                />
                <h3 className="text-black font-semibold font-title text-xl mt-6">
                  Sketching & User flow{" "}
                </h3>
                <p className="text-xl dark:text-iron-300 mt-2">
                  {" "}
                  I started with a sketching session to define the user flows in
                  the app, including happy paths and unhappy paths.
                </p>
              </div>
            </div>
          </p>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark ">
            Developing the idea
          </h2>

          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            After arguing if the user flows effectively addressed user needs, I
            defined the style guide based on the brand guidelines, then moved on
            to designing high-fidelity wireframes for both the app and the
            website.
          </p>
          <div className=" flex flex-col gap-20 mt-20 ">
            <div>
              <h4 className="font-semibold text-2xl mb-6">Style guide</h4>
              <img src="/projects/constructoken/img15.webp" alt="styly guide" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl">Website</h4>
              <img
                className="w-full mx-auto "
                src="/projects/constructoken/img16.webp"
                alt="website"
              />
            </div>
            <div>
              <h4 className="font-semibold text-2xl ">Mobile app</h4>
              <img
                className="w-full mx-auto"
                alt="mobile app"
                src="/projects/constructoken/img09.webp"
              />
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark ">
            Next Steps
          </h2>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Test the prototype with users and iterate on the design based on
            user feedback before taking it into development and then start with
            a beta test with 10 users to continue collecting feedback and
            iterating the design.
          </p>
          <img
            className="w-20 mt-10"
            src="/projects/constructoken/fur.webp"
            alt="fur"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
