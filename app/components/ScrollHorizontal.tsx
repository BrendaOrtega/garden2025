import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { cn } from "~/utils/cn";

export const ScrollHorizontal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {});

  return (
    <section className="h-[600vh] lg:h-[540vh] xl:h-[580vh]" ref={ref}>
      <div className="sticky bg-transparent top-0 w-full overflow-x-hidden ">
        <motion.div
          style={{ x }}
          className="w-max flex  h-[110vh] gap-20 items-center pr-[150vw] lg:pr-[40vw] "
        >
          <div className="w-max flex flex-col lg:flex-row h-[110vh] gap-8 xl:gap-20 items-center bg-black pb-12 pl-4 lg:pl-0 pt-10 lg:pt-0 ">
            <div className="w-full xl:w-[340px] ml-0 xl:ml-48 flex flex-row md:flex-col gap-4 ">
              <h3 className="text-3xl xl:text-5xl font-title md:text-4xl text-white font-bold ">
                Selected projects
              </h3>
              <p className="text-lg lg:text-xl text-graylight font-light mt-2 lg:mt-12">
                Take a look at my favorites projects
              </p>
            </div>
            <div className=" flex gap-12 lg:gap-20">
              <MotionContainer
                link="/projects/easybits"
                id="uno"
                className="pb-6 bg-[#B097E3]"
                img="/easybits.webp"
                tags={["Product Design", "Frontend", "Saas"]}
                title="EasyBits"
                description="Unlocking online payments for creatives and digital content professionals"
                imageClassName="top-20 md:top-40 -right-28 group-hover:-right-20 transition-all "
              />
              <MotionContainer
                link="/projects/flink"
                id="dos"
                img="/flink.webp"
                // className="bg-[#B097E3]"
                className="pb-6 bg-[#0CCCB3]"
                tags={["Product Design", "Fintech"]}
                title="Flink"
                description="Democratizing access to stock market investments in Mexico"
                imageClassName="top-0 -left-8 md:-left-14 group-hover:scale-110 "
              />

              <MotionContainer
                link="/projects/denik"
                img="/denik.webp"
                className="pb-6 bg-[#FFD25C]"
                id="tres"
                tags={["Product Design", "Frontend", "Saas"]}
                title="Deník"
                description="The agenda to manage appointments, payments and reminders for entrepreneurs and small businesses"
                imageClassName="top-16 md:top-20 scale-80 group-hover:scale-90 group-hover:translate-y-10"
              />
              <MotionContainer
                link="/projects/constructoken"
                img="/token.webp"
                className="pb-6 bg-[#45C893]"
                tags={["UX Design", "Fintech"]}
                title="Constructoken"
                description="Offering financial solutions and construction options for self-produced housing"
                imageClassName="-left-8 top-0 scale-110 group-hover:scale-120"
              />
              <MotionContainer
                className="pb-6 "
                link="/projects/covalto"
                img="/covalto.svg"
                tags={["Product Design", "Fintech"]}
                title="Covalto"
                description="The Financial solution to manage expenses for Business"
                imageClassName="w-[60%] top-32 md:top-54 left-[20%] right-0 bottom-0 group-hover:scale-80 "
              />
              <MotionContainer
                link="/projects/santander"
                img="/personal.webp"
                className="pb-6 bg-[#F2B590]"
                tags={["UX/UI Design", "App", "Webapp", "Banking"]}
                title="Santander"
                description="Web & Mobile App to access to financial services including payments, transfers and management"
                imageClassName="-right-0 -top-48 group-hover:scale-110"
              />

              <MotionContainer
                link="/projects"
                variant="invite"
                className="pb-6 bg-[#E0B2BB]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const MotionContainer = ({
  className,
  imageClassName,
  title,
  description,
  tags = [],
  id,
  img,
  link = " ",
  variant,
  theme = "light",
}: {
  id?: string;
  className?: string;
  title?: string;
  description?: string;
  tags?: string[];
  imageClassName?: string;
  img?: string;
  link?: string;
  variant?: string;
  theme?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaWatcher.matches);
  }, []);

  const handleMouseEnter = () => {
    animate("#button", {
      opacity: 1,
      transform: "translateY(-44px)",
      scale: 1,
    });
    animate("#content", { transform: "translateY(-40px)" });
  };

  const handleMouseLeave = () => {
    animate("#button", {
      opacity: 0,
      transform: "translateY(0px)",
      scale: 0.5,
    });
    animate("#content", { transform: "translateY(0px)" });
  };
  return (
    <Link to={link}>
      <motion.div
        layoutId={id}
        // whileInView={{ filter: "blur(0px)", opacity: 1 }}
        // transition={{ delay: 0.2 }}
        // initial={{ filter: "blur(9px)", opacity: 0 }}
        viewport={{ once: true }}
        className={twMerge(" pt-0 col-span-1 flex justify-center ")}
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn(
            "w-[400px] lg:w-[560px] min-h-[584px] h-[75vh] lg:h-[842px] rounded-[40px] overflow-hidden relative bg-[#E9E9E9] flex items-end group",

            {
              "items-center justify-center text-center px-6":
                variant === "invite",
            },
            className
          )}
        >
          {img ? (
            <img
              src={img}
              className={cn("absolute transition-all ", imageClassName)}
              alt="image"
            />
          ) : null}
          {variant === "invite" ? (
            <Link to={link}>
              <div className="">
                <p className="text-4xl font-title text-center flex justify-center gap-4">
                  View all projects <FaArrowTrendUp />
                </p>
                <img className="-mb-80" src="/victory.webp" alt="cat hand" />
              </div>
            </Link>
          ) : (
            <div
              className={cn(" px-6 md:px-8 pb-10 md:pb-20 translate-y-[50px]")}
              ref={scope}
            >
              <AnimatePresence>
                <div id="content">
                  <h2
                    className={cn("text-3xl font-bold text-dark", {
                      "text-white": theme === "dark",
                    })}
                  >
                    {title}
                  </h2>
                  <div
                    className={cn("flex gap-3 mt-4 text-dark/70 font-light", {
                      "text-graylight/80 ": theme === "dark",
                    })}
                  >
                    {tags.map((tag, index) => (
                      <Tag key={index} label={tag} />
                    ))}{" "}
                  </div>
                  <p
                    className={cn(
                      "text-dark  mt-4 text-lg md:text-xl font-subtitle",
                      {
                        "text-graylight ": theme === "dark",
                      }
                    )}
                  >
                    {description}
                  </p>
                </div>
                <div className="block lg:hidden">
                  <SimpleButton theme={theme} link={link} />
                </div>
                <motion.div id="button" className="opacity-0 hidden lg:block">
                  <SimpleButton theme={theme} link={link} />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>{" "}
    </Link>
  );
};

export const SimpleButton = ({
  link,
  theme,
}: {
  link: string;
  theme: string;
}) => {
  return (
    <Link to={link}>
      <button
        className={cn(
          "w-fit px-4 bg-dark/10 flex items-center gap-2 text-black rounded-full mt-3 md:mt-6 h-10 hover:bg-black hover:text-white transition-all cursor-pointer",
          {
            "bg-white/10 text-white hover:bg-white hover:text-black":
              theme === "dark",
          }
        )}
      >
        Explore
        <FaArrowTrendUp />
      </button>{" "}
    </Link>
  );
};

export const Tag = ({
  label,
  variant,
}: {
  label: string;
  variant?: string;
}) => {
  return (
    <div
      className={cn("text-sm", {
        "border border-graylight/15 px-1 rounded text-graylight cursor-pointer":
          variant === "outline",
      })}
    >
      {label}
    </div>
  );
};
