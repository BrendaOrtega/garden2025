import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function lastplay() {
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
        <div className="w-full flex items-center bg-[#262F5F] h-[280px] md:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            alt="cover"
            className="h-auto w-full md:w-[80%] mx-auto mt-10 md:mt-20 "
            src="/projects/lastplay/cover.webp"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-water"> Projects </span> ⇢{" "}
                <span> Lastplay </span>
              </p>
            </Link>
            <a
              href="https://www.lastplay.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-20  md:w-[100px] hover:scale-90 transition-all"
                src="/projects/lastplay/logo.webp"
              />
            </a>

            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="UI Design" />
              <Tag variant="outline" label="Mobile App" />
              <Tag variant="outline" label="IOS/Android" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-dark font-bold font-title text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500  ">January 2023</p>
            <p className="text-dark font-bold font-title text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500  ">UI Designer</p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl ">
              <span className="text-water">
                Lastplay is a mobile application
              </span>{" "}
              that offers specialized
              <span className="text-water">
                {" "}
                free services to manage sports tournaments{" "}
              </span>{" "}
              (tochito, soccer, and basketball). After identifying the users
              involved in this type of tournament, three user types were
              identified with different needs: admin, player, and guest.
            </p>
            <p className="text-xl md:text-2xl  mt-6">
              Based on the business and user needs, the minimum features needed
              to provide a good experience in the app were set. Admins can
              create a tournament, add teams, and players, publish the game
              schedule, and track the score of each match; players can register
              for a team, keep track of your game schedule, and view general
              tournament information and a visitor can be aware of the schedule
              of your favorite teams.
            </p>
            <p className="text-xl md:text-2xl  mt-6">
              The objective of this project was
              <span className="text-water">
                {" "}
                to improve the user interface, take the brand guidelines and
                redefine the user experience through improvements to copy,
                workflows, and user interface elements
              </span>{" "}
              considering the technical limitations and business requirements.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Understanding and definition
          </h2>
          <p className="text-xl  mt-6">
            For reasons of privacy business requirements and research results
            have not been included here. But, based on the research step
            results, the first design proposal was done in two parts:
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-12 md:mt-20">
            <div className="w-full md:w-[380px] grow">
              <img
                alt="site map"
                className="rounded-xl rotate-3 hover:-rotate-3 h-[240px] md:h-[380px] w-full object-cover transition-all"
                src="/projects/lastplay/img3.webp"
              />
              <p className="text-base font-title font-semibold  mt-8">
                {" "}
                Site map / Information Architecture
              </p>
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="low fidelity wireframes"
                className="rounded-xl -rotate-3 hover:rotate-3 transition-all h-[240px] md:h-[380px] w-full object-cover"
                src="/projects/lastplay/img4.webp"
              />
              <p className="text-base font-title font-semibold  mt-8">
                {" "}
                Low-fidelity wireframes from scratch
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            UI Design
          </h2>
          <p className="text-xl  mt-6">
            After advancing to and testing medium-fidelity wireframes, a mood
            board and style guide were created to get started on high-fidelity
            wireframes.
          </p>
          <p className="text-xl  mt-6">
            These are the mockups designed before the interface updates and the
            mockups after new brand guidelines were applied. The improvement
            included copy changes, redefinition of workflows, new alternative
            flows that corrected errors and empty states within the application,
            and a large change related to interface elements and UI patterns.
          </p>
          <div className="flex flex-col justify-center items-center mt-10">
            <img alt="screens" src="/projects/lastplay/img1.webp" />
            <img
              alt="paint"
              className="w-12 md:w-[120px]"
              src="/projects/lastplay/color.webp"
            />
            <img alt="screens" src="/projects/lastplay/img2.webp" />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Next steps
          </h2>
          <p className="text-xl  mt-6">
            The next steps will be to measure the use of the application and
            organize surveys and user tests to verify the effectiveness,
            efficiency, usability, and user satisfaction when using the
            application and continue iterating based on these results. At the
            same time, work will be started on the admin panel that will be
            managed by internal staff.
          </p>
          <img
            alt="fur"
            className="w-20 mt-6"
            src="/projects/lastplay/fur.webp"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
