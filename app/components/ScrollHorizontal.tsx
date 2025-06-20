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
import { useMatchMedia } from "~/hooks/useMatchMedia";

export const ScrollHorizontal = ({ show = false }: { show?: boolean }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  
  const [dynamicHeight, setDynamicHeight] = useState("auto");
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateLayout = () => {
      if (cardsContainerRef.current && scrollContainerRef.current) {
        const cardsWidth = cardsContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollableDistance = cardsWidth - viewportWidth;
        
        // Solo aplicar si hay contenido para scrollear
        if (scrollableDistance > 0) {
          setScrollRange(scrollableDistance);
          // La altura dinámica da espacio para que el scroll vertical ocurra
          // Aumentar el multiplicador (e.g., * 2) hará el scroll más lento/largo
          setDynamicHeight(`${scrollableDistance * 1.5}px`);
        } else {
          setScrollRange(0);
          setDynamicHeight("100vh"); // Altura por defecto si no hay scroll
        }
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [show]); // Recalcular si 'show' cambia y el contenido aparece

  const { scrollYProgress } = useScroll({ target: scrollContainerRef });
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  // Animación del texto basada en el scroll
  const textY = useTransform(scrollYProgress, [0.8, 1], ["20vh", "0vh"]);
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={scrollContainerRef} style={{ height: dynamicHeight }} className="relative">
      <div className="sticky bg-black top-0 w-full h-screen overflow-hidden ">
        <motion.div
          ref={cardsContainerRef}
          style={{ x, willChange: 'transform' }}
          className="flex h-full w-full items-center pt-14 md:pt-0 relative z-20 pl-4 md:pl-12 lg:pl-24 scrollbar-hide " // Padding inicial
        >
          <span className="absolute top-6 md:top-10 left-4 flex md:hidden gap-4 ">
              <h3 className="text-3xl xl:text-5xl font-title text-white w-fit font-bold ">
              Selected projects
            </h3>
          </span>
          {/* Contenido del carrusel */}
          <div className="w-full xl:w-[340px] flex-shrink-0 flex-col gap-4 pr-8 hidden md:flex">
            <h3 className="text-3xl xl:text-5xl font-title text-white font-bold">
              Selected projects
            </h3>
            <p className="text-lg lg:text-xl text-graylight font-light mt-2 lg:mt-12">
              Take a look at my favorites projects
            </p>
          </div>
          <div className="flex gap-12 lg:gap-20 pr-[90vw] ">
            {show && (
              <>
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
                  imageClassName="top-10 md:top-20 scale-80 group-hover:scale-90 group-hover:translate-y-10"
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
              </>
            )}
          </div>
        </motion.div>
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 "
        >
          <StatsSection />
        </motion.div>
      </div>
    </section>
  );
};

const LaurelWreath = ({ className }: { className?: string }) => (
  <svg className={className} width="42" height="114" viewBox="0 0 42 114" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.8333 1.5C22.8333 30.5 -1.16669 64.1667 20.1666 112.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20.1667 112.5C19.1667 106.833 17.1667 102.333 14.8334 99.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24.8333 97C22.4167 92.2 19.5 87.5 16.8333 84.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M29.1667 82.5C26.5 77.8333 23.3333 73.1667 20.1667 70" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M33.1667 68.5C30.0833 64.3 26.5 59.8333 23.1667 56.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36.5 55C33.5 50.8333 29.6667 46.5 26.1667 43.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M39.1667 41.5C36.4167 37.7 33 33.6667 29.5 30.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40.8333 27.5C38.5 24.5 35.6667 21.1667 32.5 18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M41.5 13.5C39.5 11.1667 37.1667 8.5 34.8333 6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center gap-4 text-white">
    <LaurelWreath className="transform scale-x-[-1]" />
    <div className="text-center w-48">
      <p className="text-5xl font-bold">{number}</p>
      <p className="text-xl font-light mt-2">{text}</p>
    </div>
    <LaurelWreath />
  </div>
);

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
      <StatItem number="+9" text="Años de experiencia" />
      <StatItem number="+40" text="Proyectos entregados" />
      <StatItem number="+25" text="Empresas" />
    </div>
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
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
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
