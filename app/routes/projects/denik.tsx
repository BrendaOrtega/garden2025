import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function denik() {
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
        <div className="w-full bg-denik h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px] flex items-center  bg-cover">
          <img
            className="h-auto w-full md:w-[80%] mx-auto  "
            src="/projects/denik/cover.webp"
            alt="cover"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-denik-secondary"> Projects </span> ⇢{" "}
                <span> Deník </span>
              </p>
            </Link>
            <a
              href="https://www.denik.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[140px] md:w-[160px] hover:scale-90 transition-all"
                src="/projects/denik/logo.png"
                alt="logo"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Product Design" />
              <Tag variant="outline" label="Frontend" />
              <Tag variant="outline" label="Webapp" />
              <Tag variant="outline" label="Saas" />
              <Tag variant="outline" label="React" />
              <Tag variant="outline" label="TailwindCSS" />
            </div>

            <p className="text-black font-semibold font-title text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              March 2024 - July 2025
            </p>
            <p className="text-black font-semibold font-title text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Product Designer & Frontend Developer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Deník is an{" "}
              <span className="text-denik-secondary font-semibold">
                {" "}
                all-in-one digital scheduling and business management platform
              </span>{" "}
              designed to help service-based professionals streamline their
              operations and improve client experience.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The platform enables clients to book appointments 24/7 through a{" "}
              <span className="text-denik-secondary font-semibold">
                customizable booking website, while automated email and WhatsApp
                reminders help reduce no-shows.
              </span>{" "}
              Deník also supports secure online payments — including installment
              plans — and offers advanced client management tools, such as
              digital records, appointment history, and private notes.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              Beyond scheduling, Deník helps businesses build lasting client
              relationships with integrated feedback surveys, loyalty programs,
              and gift card promotions. A built-in point-of-sale (POS) system
              allows users to track revenue in real time, with detailed daily,
              weekly, and monthly reports for better financial insight.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              As the product designer on this project, my challenge was to
              <span className="text-denik-secondary font-semibold">
                {" "}
                create a user-centered platform that simplifies complex
                workflows, enhances usability across devices, and drives
                customer engagement through thoughtful, intuitive design.
              </span>{" "}
              The focus was on crafting a seamless experience that supports both
              business owners and their clients — from booking to payment while
              taking into account business requirements.
            </p>
          </div>
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
