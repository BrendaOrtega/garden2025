import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { MotionContainer } from "~/components/ScrollHorizontal";
import { useEffect } from "react";
import getBasicMetaTags from "~/utils/getBasicMetaTags";

export const meta = () =>
  getBasicMetaTags({
    title: "Projects",
    description: "Take a look at my projects",
  });

export default function Blog() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 lg:py-40 px-4 md:px-[5%] xl:px-0">
        <div className=" flex flex-col md:flex-row items-center justify-center gap-1 lg:gap-4 h-[112px]">
          <h2 className="text-4xl lg:text-7xl font-title text-center  ">
            Take a look at my{" "}
          </h2>
          <img
            className="w-32 lg:w-44 mt-0 md:-mt-6 h-fit"
            src="/cartel3.webp"
            alt="saas cartel"
          />
        </div>
        <div className="flex justify-between gap-12 lg:gap-20 flex-wrap mt-12 lg:mt-32 ">
          {" "}
          <MotionContainer
            className="bg-[#B097E3] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px] "
            id="uno"
            link="/projects/easybits"
            img="/easybits.webp"
            tags={["Product Design", "Webapp", "Frontend", "Saas"]}
            title="EasyBits"
            description="Unlocking online payments for creatives and digital content professionals"
            imageClassName="top-20 md:top-40 -right-28 group-hover:-right-20 transition-all "
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/flink"
              id="dos"
              img="/flink.webp"
              // className="bg-[#B097E3]"
              className="bg-[#0CCCB3] w-full md:w-[inherit]  h-[600px] pb-10 lg:h-[842px]"
              tags={["Product Design", "App", "Fintech"]}
              title="Flink"
              description="Democratizing access to stock market investments in Mexico"
              imageClassName="-top-12 md:top-0 -left-10 md:-left-14 scale-90 group-hover:scale-110 "
            />
          </div>
          <MotionContainer
            link="/projects/denik"
            img="/denik.webp"
            className="bg-[#FFD25C] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            id="tres"
            tags={["Product Design", "Frontend", "Webapp", "Saas"]}
            title="Deník"
            description="The agenda to manage appointments, payments and reminders for entrepreneurs and small businesses"
            imageClassName="top-0 md:top-20 scale-75 group-hover:scale-90 group-hover:translate-y-10"
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/constructoken"
              img="/token.webp"
              className="bg-[#45C893] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              tags={["UX Design", "App", "Fintech"]}
              title="Constructoken"
              description="Offering financial solutions and construction options for self-produced housing"
              imageClassName="-left-6 md:-left-10 top-0 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            className="w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            link="/projects/covalto"
            img="/covalto.svg"
            tags={["Product Design", "App", "Fintech"]}
            title="Covalto"
            description="The Financial solution to manage expenses for Business"
            imageClassName="w-[60%] top-36 md:top-54 left-[20%] right-0 bottom-0 group-hover:scale-80 "
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/reform"
              img="/reform.webp"
              className="bg-[#B097E3] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              tags={["UI Design", "Prototyping", "App", "AI"]}
              title="Reform AI"
              description="Renovate your spaces using artificial intelligence and buy the furniture and services that you need in one place"
              imageClassName="-right-0 top-6 md:top-32 scale-90 md:scale-120 group-hover:scale-110"
            />
          </div>
          <MotionContainer
            link="/projects/santander"
            img="/personal.webp"
            className="bg-[#F2B590] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            tags={["Product Design", "App", "Webapp", "Banking"]}
            title="Santander"
            description="Web & Mobile App to access to financial services including payments, transfers and management"
            imageClassName="-right-0 -top-48 group-hover:scale-110"
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              theme="dark"
              className="bg-[#0E0E10] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              link="/projects/uicourse"
              img="/ui-fx.webp"
              tags={["Design", "Webapp", "Frontend", "E-learning"]}
              title="UI Course"
              imageClassName="-right-0 top-0 md:top-20 group-hover:-translate-x-16"
              description="A complete course to learn UI Design from the principles to practice"
            />
          </div>
          <MotionContainer
            className="bg-[#F1ABA5] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            link="/projects/lastplay"
            img="/play.webp"
            tags={["UI Design", "App", "Sports"]}
            title="LastPlay"
            imageClassName="-right-16 top-0 md:top-20  group-hover:-translate-x-14 scale-100 md:scale-120"
            description="The management application to organize and manage sports tournaments"
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/epros"
              img="/pros.webp"
              className="bg-[#A3BC73] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              tags={["UX Design", "Website", "UI Design", "E-learning"]}
              title="English for Professionals"
              description="English courses for all levels, business and tourism orientation or personalized courses"
              imageClassName="-right-16 top-10 md:top-20 group-hover:-translate-x-16 group-hover:translate-y-6 transition-all"
            />
          </div>
          <MotionContainer
            className="bg-[#E9786E] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            link="/projects/realstate"
            img="/projects/inmuebles.webp"
            tags={["Product Design", "Prototyping", "Webapp"]}
            title="Propiedades"
            description="Facilitating the process of buying and selling real estate properties for clients and sellers"
            imageClassName="left-0 right-0 -top-28 md:-top-16 scale-60 md:scale-75 transition-all rounded-xl"
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/fixterorg"
              img="/projects/org.webp"
              className="bg-[#85DDCB] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              tags={["Product Design", "Frontend", "Website", "Services"]}
              title="Fixter.org"
              description="Showing the b2b services we offer and our selected projects catalogue "
              imageClassName="left-0 right-0 top-10 md:top-28 -rotate-6 scale-80 group-hover:rotate-6 group-hover:scale-75 transition-all"
            />
          </div>
          <MotionContainer
            className="bg-[#F85387] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
            img="/projects/potentiia.png"
            link="/projects/potentiia"
            tags={["UX/UI Design", "Website", "Frontend"]}
            title="Potentiia"
            description="Helping people to get their goals through sport and business coaching programs "
            imageClassName="m-[20%] w-[60%] top-28 md:top-48 "
          />
          <div className="mt-0 lg:mt-16">
            <MotionContainer
              link="/projects/azteca"
              img="/projects/azteca.webp"
              className="bg-[#93E6EB] w-full md:w-[inherit] h-[600px] pb-10 lg:h-[842px]"
              tags={["UX/UI Design", "E-commerce", "Health"]}
              title="Laboratorios Azteca"
              description="Digitizing access to clinical studies through e-commerce "
              imageClassName="right-0 left-0 top-0 md:top-10 scale-80 "
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
