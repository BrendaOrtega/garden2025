import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";

export default function formmy() {
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
      <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-16  pb-20">
        <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-gradient-to-r from-[#5265F6] to-[#835EF6]">
          <img
            className="h-auto w-full md:w-[80%] mx-auto "
            src="/projects/formmy/cover.png"
            alt="cover"
          />
        </div>
        <div className="flex gap-12 mt-16 md:mt-28 flex-wrap md:flex-nowrap ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/">
              <p className="uppercase text-white/30 text-xs absolute -top-10">
                <span className="hover:text-lila"> Projects </span> ⇢{" "}
                <span className="text-white"> Formmy</span>
              </p>
            </Link>
            <a
              href="https://www.formmy.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[200px] md:w-[240px] hover:scale-90 transition-all"
                src="/projects/formmy/logo.svg"
                alt="logo"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Web App" />
              <Tag variant="outline" label="UI/UX Design" />
              <Tag variant="outline" label="Saas" />
              <Tag variant="outline" label="Figma" />
              <Tag variant="outline" label="React" />
              <Tag variant="outline" label="TailwindCSS" />
            </div>
            <p className="text-dark font-bold text-xl mt-10 mb-1">Date</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              December 2023
            </p>
            <p className="text-dark font-bold text-xl mt-10 mb-1">Role</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Product Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Formmy is a web application
              <span className="text-lila">
                {" "}
                that allows you to add contact forms{" "}
              </span>{" "}
              to your website. With Formmy you can create your form, customize
              it, and add it to your website just by copying and pasting an
              iframe into your code. Then, you can manage your client's messages
              from the dashboard.
            </p>
            <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              What type of inputs are necessary for the users? How might we
              configure all form items in a way which entices users to put it on
              their websites? Is the step-by-step implementation process clear
              to users?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
