import { Navbar } from "~/components/Navbar";
import { Footer } from "./home";
import { ScrollGallery } from "~/components/ScrollGallery";
import getBasicMetaTags from "~/utils/getBasicMetatags";
import { cn } from "~/utils/cn";
import { useEffect } from "react";

export const meta = () =>
  getBasicMetaTags({
    title: "Saas",
    description: "Take a look at my personal projects",
  });

const projects = [
  {
    title: "Deník",
    paragraph:
      "Deník is most easy business tool to manage your appointments, make online payments, send reminders and surveys. It help you to manage your business in on place.",
    link: "https://www.denik.me/",
    image: "/projects/denik1.webp",
  },
  {
    title: "EasyBits",
    paragraph:
      "Do you want to sell ilustrations, couses, books, webinars, templates o apps? EasyBits is the solution to sell your digital assets online.",
    link: "http://easybits.cloud",
    image: "/projects/bits1.webp",
  },
  {
    title: "Formmy",
    paragraph:
      "Add contact forms to your website easly. Create and customize your formmy to keep your brand guidelines. And then, copy and paste one code line and your formmy is ready.",
    link: "https://www.formmy.app/",
    image: "/projects/fm.webp",
  },
  {
    title: "Fixter",
    paragraph:
      "Fixter is an small Design & Development Agency founded by me and my partner 9 years ago. I continue designing designing selected projects partially. So, if you are looking for design or build a new app, email us.",
    link: "https://fixter.org/",
    image: "/projects/fix2.webp",
  },
  {
    title: "Fixtergeek",
    paragraph:
      "Fixtergeek is a E-learning platform founded 9 years ago, where you can find specific development on demand courses to become a pro developer. And discover a lot of blog post about new tools, librarys, frameworks or design tips. ",
    link: "https://www.fixtergeek.com/",
    image: "/projects/fx.webp",
  },
];

export default function Saas() {
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
        <div className=" flex flex-col lg:flex-row items-center  justify-center gap-4  h-[112px]">
          <h2 className="text-4xl lg:text-7xl font-title text-center  ">
            Take a look at my own
          </h2>{" "}
          <img className="w-32 lg:w-52 -mt-3 h-fit" src="/cartel.webp" />
        </div>
        <ScrollGallery />
        <section className="flex flex-col gap-12 mt-12 lg:hidden">
          {projects.map((project, index) => (
            <SaasCard project={project} />
          ))}
        </section>
      </div>
      <Footer />
    </section>
  );
}

const SaasCard = ({
  project,
}: {
  project: {
    title: string;
    paragraph: string;
    link: string;
    image: string;
  };
}) => {
  return (
    <div>
      <img
        className=" w-full object-cover border border-black/10 h-72 rounded-2xl"
        src={project.image}
      />
      <h3 className="text-3xl mt-6 text-black font-title">{project.title}</h3>
      <p className={cn(" transition-all mt-2 text-lg text-black", {})}>
        {project.paragraph}
      </p>
      <div className="flex gap-4 mt-6">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button
            className={cn(
              "hover:scale-110 cursor-pointer transition-all",
              "py-3 px-6 bg-gray-200 text-black rounded-full"
            )}
          >
            Visit Live
          </button>
        </a>
      </div>
    </div>
  );
};
