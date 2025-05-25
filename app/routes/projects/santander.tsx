import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function santander() {
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
        <div className="w-full bg-[#BD5648] h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            className="h-auto w-full md:w-[80%] md:mx-auto ml-3 "
            src="/projects/santander/cover.png"
            alt="cover"
          />
        </div>

        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-black text-xs absolute -top-10">
                <span className="hover:text-salmon"> Projects </span> ⇢{" "}
                <span> Santander </span>
              </p>
            </Link>
            <a
              href="https://www.santander.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-[140px] md:w-[180px] hover:scale-90 transition-all"
                src="/projects/santander/logo.png"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="UX/UI Design" />
              <Tag variant="outline" label="Web App" />
              <Tag variant="outline" label="App" />
              <Tag variant="outline" label="IOS/Android" />
              <Tag variant="outline" label="Banking" />
              <Tag variant="outline" label="Sketch" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Marzo 2019 - Junio 2020
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UX/UI Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-0">
              Santander Bank is one of the largest financial institutions in
              Mexico. I had the opportunity to contribute as a product designer
              on two of its most important digital initiatives:{" "}
              <span className="text-salmon">
                Santander App and Santander Personal.
              </span>
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              The Santander App is the bank’s main mobile platform, offering a
              wide range of financial services including money transfers,
              investments, credit card payments and management, and utility
              service payments. My role{" "}
              <span className="text-salmon">
                focused on the design and improvement of three core
                functionalities: credit card payments, service payments, and
                investment flows.
              </span>{" "}
            </p>{" "}
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              Working in alignment with the bank’s established design system and
              brand guidelines, I was responsible for designing and refining the
              flows for credit card payments — including own and third-party
              payments, as well as card registration and cancellation. I also
              worked on the service payments section, covering the registration
              and automatic billing of essential services like electricity,
              internet, and telephone. For the investment module, I designed the
              flow that allows users to choose the type of investment that best
              suits their needs, configure parameters such as term and amount,
              and review detailed information before confirming.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              In parallel, I collaborated closely with developers to test and
              validate design system components directly in code, ensuring
              consistency, accessibility, and a seamless user experience across
              touchpoints.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              <span className="text-salmon">
                {" "}
                Santander Personal is an omnichannel platform developed for the
                bank’s high-net-worth clients.{" "}
              </span>{" "}
              It functions both as a web-based administrative tool for internal
              banking staff and as a premium section within the mobile app
              available only to selected clients. As its name suggests, this
              platform offers a{" "}
              <span className="text-salmon">
                {" "}
                personalized digital experience, allowing premium users to
                access tailored financial services remotely, without the need to
                visit a physical branch.
              </span>{" "}
              On the internal side, it provides the bank's advisors with tools
              to monitor product contracts, maintain client histories, and
              manage agent assignments for continuous, one-on-one client
              support. I was involved in the project from its initial kick-off
              through research, definition, and design, all the way to final
              testing of the platform.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              {" "}
              However, due to confidentiality agreements, I am unable to share
              further details or visual materials related to those two projects.
            </p>
          </div>
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
