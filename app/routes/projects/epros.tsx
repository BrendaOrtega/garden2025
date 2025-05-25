import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function epros() {
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
        <div className="w-full flex items-center bg-pros h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            alt="cover"
            className="h-auto w-full md:w-[80%] mx-auto scale-75"
            src="/pros.webp"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-pros"> Projects </span> ⇢{" "}
                <span> English for professionals </span>
              </p>
            </Link>
            <a
              href="https://www.e4pros.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-32 md:w-[140px] hover:scale-90 transition-all"
                src="/projects/epros/logo.webp"
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
            <p className="text-base text-iron-500  ">October 2024</p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Product Designer & Frontend Developer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              English4Professionals (E4Pros) is a language training company
              specializing in{" "}
              <span className="text-pros">business English education</span> .
              They offer online, dynamic, and communicative classes tailored to
              the specific needs of professionals and companies. Their services
              include English courses for executives and middle management,
              document translation, simultaneous interpretation, and specialized
              English for various functional areas. The company employs
              certified native and bilingual instructors and provides a
              practical learning method to help students achieve fluency from
              beginner to advanced levels (A1–C2). E4Pros also offers free
              placement tests and flexible scheduling options.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The project's objetive was to{" "}
              <span className="text-pros">
                {" "}
                renovate the user interface to improve the visuals, performance
                and usability{" "}
              </span>
              base on the new branding.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div className="flex flex-wrap  lg:flex-nowrap items-center gap-6 ">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
              Goals
            </h2>
            <p className="text-xl  mt-6">
              Based on the business requeriments and user needs shared by the
              companany, the 3 main goals defined were:
            </p>
            <p className="text-black font-title text-lg mt-6">
              Improve User Experience and Navigation
            </p>
            <ul className="text-base  mt-3">
              <li>
                {" "}
                &bull; Simplify the site architecture to make it intuitive and
                user-friendly.
              </li>
              <li>
                {" "}
                Ensure fast access to core services (e.g., business English
                courses, translation, interpretation).
              </li>
              <li>
                {" "}
                &bull; Make the site mobile-responsive and accessible across
                devices.{" "}
              </li>
              <li>
                {" "}
                &bull; Offer seamless language switching (English and Spanish).
              </li>
            </ul>
            <p className="text-black font-title text-lg mt-6">
              Boost Lead Generation
            </p>
            <ul className="text-base  mt-3">
              <li>
                {" "}
                &bull; Optimize calls-to-action (CTAs) for placement tests,
                contact forms, and consultations.
              </li>
              <li>
                {" "}
                Highlight testimonials, client logos, and case studies to build
                trust.
              </li>
              <li>
                {" "}
                &bull; Incorporate conversion-focused landing pages for each
                service.
              </li>
            </ul>
            <p className="text-black font-title text-lg mt-6">
              Enhance Brand Credibility
            </p>
            <ul className="text-base  mt-3">
              <li>
                {" "}
                &bull;Use a modern, clean, and professional visual design
                aligned with E4Pros’ identity.
              </li>
              <li>
                {" "}
                Showcase instructor credentials, client partnerships, and
                success metrics.
              </li>
              <li>
                {" "}
                &bull; Integrate clear messaging that emphasizes value and
                results.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[60%]">
            <img
              alt="goal diagram"
              className="w-full object-cover"
              src="/projects/epros/img1.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Design & Development
          </h2>

          <p className="text-xl  mt-6 mb-12">
            The design proposal for the website defines the core visual
            elements—such as color palette, typography, imagery, and UI
            components—to ensure brand consistency and a cohesive user
            experience across all digital touchpoints.
          </p>
          <div className="flex w-full overflow-hidden">
            <img
              alt="style guide"
              className="w-1/2 "
              src="/projects/epros/img2.webp"
            />
            <img
              alt="style guide"
              className="w-1/2"
              src="/projects/epros/img3.webp"
            />
          </div>
          <img
            alt="screens"
            className="w-full object-cover"
            src="/projects/epros/img4.webp"
          />
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-title text-dark ">
            Next steps
          </h2>
          <p className="text-xl  mt-6 mb-12">
            As part of the functional and performance enhancements, I set up
            Google Analytics and Hotjar to monitor user behavior. This allows me
            to track errors, evaluate user journey, and gain insights into the
            overall user experience. I will be analyzing key metrics such as
            session duration, lead generation rates, user satisfaction and
            interaction patterns to identify opportunities for continuous
            improvement.
          </p>
        </div>
        <img alt="fur" className="w-20 mt-6" src="/projects/epros/fur.webp" />
      </section>
      <Footer variant="small" />
    </main>
  );
}
