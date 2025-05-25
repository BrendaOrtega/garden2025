import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function reformai() {
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
        <div className="w-full flex items-center bg-reform h-[280px] md:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            className="h-auto w-full md:w-[80%] mx-auto mt-6 md:mt-10 "
            src="/reform.webp"
            alt="the cat"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-[#B37CF2]"> Projects </span> ⇢{" "}
                <span> Reform AI </span>
              </p>
            </Link>
            <a
              href="https://ui.fixtergeek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-44 md:w-[220px] hover:scale-90 transition-all"
                src="/projects/reform/logo.webp"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="UI Design" />
              <Tag variant="outline" label="Prototyping" />
              <Tag variant="outline" label="App" />
              <Tag variant="outline" label="AI" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              December 2024 - January 2025
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
              ReformAi is an E-commerce that{" "}
              <span className="text-reform-secondary font-extrabold">
                {" "}
                combines artificial intelligence with e-commerce to streamline
                the home renovation and decoration process.
              </span>{" "}
              The app offers users AI-powered interior design proposals tailored
              to their specific spaces, providing a personalized and immersive
              design experience. Once a design is selected, users can purchase
              recommended furniture and hire professional services — all within
              a seamless and intuitive interface.
            </p>

            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The objective of this project was to{" "}
              <span className="text-reform-secondary font-extrabold">
                {" "}
                design a user-centered mobile experience that simplifies the
                home renovation journey.
              </span>{" "}
              Our approach focused on usability, accessibility, and
              conversion-driven design principles. Key UX goals included
              minimizing user effort through smart automation, enhancing
              decision-making with visual design previews, and ensuring a
              cohesive end-to-end journey — from inspiration to execution.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 ">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
              Goals
            </h2>
            <p className="text-xl  mt-6">
              Based on the business requeriments and user needs shared by the
              companany, the specific goal were as follows:
            </p>
            <ul className="text-black font-bold font-title text-lg  ">
              <li>
                {" "}
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Ensure the mobile app’s look and feel aligns with the
                  brand identity.
                </p>
              </li>
              <li>
                {" "}
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Incorporate the company’s various business models into
                  the app.
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Integrate the AI Decoration Service for user
                  consumption. (considering AI service requeriments)
                </p>
              </li>
              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Design user workflows based on insights gathered during
                  the research phase.
                </p>
              </li>

              <li>
                <p className="text-black font-bold font-title text-lg mt-3 ">
                  &bull; Facilitate the home renovation journey for users,
                  including access to complementary services.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[60%]">
            <img
              className="w-full object-cover"
              src="/projects/reform/img6.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Design & Prototyping
          </h2>
          <p className="text-xl  mt-6">
            Based on the brand guidelines and the company's vision, UI's
            proposal was as follows:
          </p>
          <p className="text-xl  mt-6 mb-12"></p>

          <img className="w-full " src="/projects/reform/img1.webp" />
          <p className="text-xl  mt-6">Somo of the main screens</p>
          <img
            className="w-full object-cover"
            src="/projects/reform/img3.webp"
          />
          <img
            className="w-full object-cover"
            src="/projects/reform/img4.webp"
          />
          <p className="text-xl  mt-6">
            To carry out some presentations and user tests, I worked on the
            prototype that follows the happy paths:
          </p>
          <img
            className="w-full object-cover mt-12"
            src="/projects/reform/img5.webp"
          />
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Next steps
          </h2>
          <p className="text-xl  mt-6 mb-12">
            To continue improving the user experience, we will continue
            iterating, tracking unhappy paths, evaluating the user journey, and
            gaining insights into the overall user experience as we move toward
            the web version.
          </p>
        </div>
        <img className="w-20 mt-6" src="/projects/reform/fur.webp" />
      </section>
      <Footer variant="small" />
    </main>
  );
}
