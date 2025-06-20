import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaArrowUpLong,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { useRef, useState, type ReactNode, type RefObject, useEffect } from "react";
import { MotionValue } from "motion";
import { FlipWords } from "~/components/FlipWords";
import { cn } from "~/utils/cn";
import { Link } from "react-router";
import { CircularButton } from "~/components/CircularButton";
import MichiWhite from "~/components/MichiWhite";
import getBasicMetaTags from "~/utils/getBasicMetaTags";

export const meta = () =>
  getBasicMetaTags({
    title: "Brenda González Ortega | Product Designer",
    description: "Take a look at my work",
  });

const MiniCard = ({
  id,
  img,
  number,
}: {
  id: string;
  img?: string;
  number: string;
}) => {
  return (
    <div className="w-[70px] h-32">
      <motion.div 
        layoutId={id} 
        className=""
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.2 }
        }}
      >
        <img
          className="w-full h-[105px] rounded object-cover object-center shadow-lg"
          src={img}
          alt="project exmple"
        />
      </motion.div>
      <span className="font-bold font-title">{number}</span>{" "}
    </div>
  );
};

export default function Home() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start center", "end end"],
  });
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShow(latest > 0 ? true : false);
  });

  return (
    <section className="bg-white">
      <Navbar />
      <section className="max-w-5xl mx-auto h-fit pb-12 pt-12 lg:h-[70vh]">
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-between h-full">
          <h1 className="text-[32px] md:[54px] lg:text-6xl font-title w-full md:w-[63%] leading-snug lg:text-left text-center mt-6 lg:mt-0">
            Hello, I'm Brenda.
            <br /> I'm a{" "}
            <span className="font-extrabold text-[32px] md:[54px] lg:text-6xl text-brand">
              <FlipWords
                words={[
                  "Product Designer",
                  "UX Designer",
                  "Web Designer",
                  "Web Developer",
                ]}
              />
            </span>{" "}
            <br />
            based in México.
          </h1>

          <div className="w-full md:w-[37%] flex justify-center xl:justify-center">
            <img
              className="w-48 lg:w-auto ml-0 xl:ml-32"
              src="/emoji.webp"
              alt="emoji de brenda"
            />
          </div>
        </div>
      </section>
      
      <AnimatePresence>
        <div className="h-[128px] my-10">
          {!show && (
            <section
              key={12}
              className="flex gap-6 justify-center h-full relative z-20"
            >
              <>
                <MiniCard id="uno" img="/small-easybits.webp" number="01" />
                <MiniCard id="dos" img="/small-flink.png" number="02" />
                <MiniCard id="tres" img="/small-denik.png" number="03" />
              </>
            </section>
          )}
        </div>
        
        <section
          key={233}
          className="bg-black bg-bottom md:bg-bottom object-contain min-h-dvh scrollbar"
          ref={target}
        >
          <ScrollHorizontal show={show} />
        </section>
      </AnimatePresence>
      
      <About
        text="I am Product & UX Designer that studied economics. I started my tech career as frontend developer to eventually become a Product Designer. I've been working on web and mobile applications for more than 9 years and I absolutely love what I do."
        texttwo="I focus on designing complex and functional products that help users and business reach their goals. I really enjoy create experiences that users find useful and easy to understand. If you want to know more about me, know more about what I do , or talk about working together, feel free to email me."
      />
      <Skills
        titles={["UX design", "UI design", "Product Design", "Web design"]}
        images={["/ux.webp", "/ui.webp", "/pd.webp", "/web.webp"]}
      />
      <Gallery />
      <Footer />
    </section>
  );
}

const Gallery = () => {
  const ref = useRef(null);
  return (
    <main className=" h-[200px] lg:h-[500px]  w-full bg-black relative   z-50">
      <h2 className="text-white text-center justify-center text-2xl lg:text-4xl  pl-10 md:pl-0 font-title flex items-center">
        Play with my pictures{" "}
        <img
          className="w-32 lg:w-44 -ml-8"
          src="/loader4.gif"
          alt="cat with laptop"
        />
      </h2>

      <section
        ref={ref}
        className="flex items-start gap-6 lg:gap-12  pt-16 h-full relative  "
      >
        <GalleryImage
          ref={ref}
          className="rotate-6"
          img="/projects/foto1.webp"
        />
        <GalleryImage
          ref={ref}
          className="-rotate-6"
          img="/projects/foto2.webp"
        />
        <GalleryImage
          ref={ref}
          className="rotate-6"
          img="/projects/foto3.webp"
        />
        <GalleryImage
          ref={ref}
          className="rotate-3"
          img="/projects/foto4.webp"
        />
        <GalleryImage
          ref={ref}
          className="-rotate-12 hidden md:block"
          img="/projects/foto5.webp"
        />
        <GalleryImage
          ref={ref}
          className="rotate-2 hidden md:block"
          img="/projects/foto6.webp"
        />
        <GalleryImage
          ref={ref}
          className="rotate-0 hidden lg:block"
          img="/projects/foto7.webp"
        />
        <GalleryImage
          ref={ref}
          className="-rotate-12 hidden lg:block"
          img="/projects/foto8.webp"
        />
        <GalleryImage
          ref={ref}
          className="rotate-12 hidden lg:block"
          img="/projects/foto9.webp"
        />
        <GalleryImage
          ref={ref}
          className="-rotate-6 hidden lg:block"
          img="/projects/foto10.webp"
        />
      </section>
    </main>
  );
};

const GalleryImage = ({
  img,
  className,
  ref,
}: {
  img: string;
  className?: string;
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <motion.div
      whileDrag={{ cursor: "grabbing" }}
      drag
      dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
      dragElastic={0.2}
      // dragSnapToOrigin
      dragConstraints={ref}
      className={cn(
        "w-40 h-28 lg:h-40  bg-white px-1 lg:px-2 pt-1 lg:pt-2 relative cursor-grab   ",
        className
      )}
    >
      <img
        className="object-cover pointer-events-none  w-full h-[70%] lg:h-[75%]"
        alt="line"
        src={img}
      />
      <img
        className="w-8 absolute right-0 bottom-4"
        src="/line.svg"
        alt="line"
      />
      <img
        className="w-6 absolute left-0 bottom-6"
        src="/line.svg"
        alt="line"
      />
    </motion.div>
  );
};

export const Footer = ({ variant }: { variant?: string }) => {
  const handleClick = () => {
    const node = document.querySelector("#top");
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className={cn(
        "h-dvh bg-black flex items-center justify-center relative w-full overflow-hidden md:overflow-auto ",
        { "h-fit py-12": variant === "small" }
      )}
    >
      <div className="text-center text-2xl  ">
        <p className="text-lg md:text-xl text-graylight mb-6 font-light">
          The best ideas start as conversations
        </p>
        <h3 className="text-4xl lg:text-9xl text-white font-title">
          Let's work together
        </h3>{" "}
        <div className="flex gap-6 justify-center">
          {" "}
          <a
            href="mailto:bremin11.20.93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-16" label="Email me" variant="white" />
          </a>
          <Link to="/contact">
            <Button className="mt-16" />
          </Link>
        </div>
        <div className="text-white/20 flex gap-4 justify-center mt-16 text-3xl">
          <a
            href="https://www.instagram.com/brenda_orteg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="hover:opacity-75 cursor-pointer transition-all hover:scale-90" />
          </a>
          <a
            href="https://github.com/BrendaOrtega"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:opacity-75 cursor-pointer transition-all hover:scale-90" />
          </a>
          <a
            href="https://www.linkedin.com/in/brendago/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:opacity-75 cursor-pointer transition-all hover:scale-90" />
          </a>
          <a
            href="https://www.youtube.com/@fixtergeek8057"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:opacity-75 cursor-pointer transition-all hover:scale-90" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 w-full flex justify-center text-center text-graylight/40 text-sm lg:text-base">
        © 2025 Brenda González Ortega - All rights reserved.
      </div>
      <div
        onClick={handleClick}
        className="absolute scale-50 lg:scale-100 overflow-hidden -right-6 md:right-0 lg:right-16 bottom-2 lg:bottom-16  "
      >
        <span className=" absolute w-full h-full  grid place-content-center">
          <FaArrowUpLong className="text-white text-2xl mx-auto" />
        </span>
        <CircularButton />
      </div>
    </section>
  );
};

const About = ({ text, texttwo }: { text: string; texttwo: string }) => {
  const words = text.split(" ");
  const letters = texttwo.split(" ");
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  return (
    <section
      ref={target}
      className="h-fit py-20 lg:py-40 bg-white flex flex-col items-start w-full overflow-hidden justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-[5%] xl:px-0">
        <img className="w-16 lg:w-24 mb-6" src="/yarn2.webp" alt="estambre" />
        <div className="text-2xl lg:text-5xl leading-snug text-black text-center flex flex-wrap gap-x-2">
          {words.map((word, i) => (
            <Word
              range={[
                0,
                (1 / (words.length + letters.length)) * (i === 0 ? 1 : i),
              ]}
              scrollYProgress={scrollYProgress}
              key={i}
            >
              {word}
            </Word>
          ))}
        </div>{" "}
        <div className="text-2xl lg:text-5xl leading-snug text-black text-center flex flex-wrap gap-x-2 mt-6">
          {letters.map((letter, i) => (
            <Word
              range={[
                0,
                (1 / (words.length + letters.length)) *
                  (i === words.length ? 1 : i + words.length),
              ]}
              scrollYProgress={scrollYProgress}
              key={i}
            >
              {letter}
            </Word>
          ))}
          <Photos />
        </div>{" "}
      </div>
    </section>
  );
};

const Photos = () => {
  return (
    <div className="flex ">
      <div className="w-16 lg:w-20 bg-white h-20 lg:h-24 rounded p-2 shadow border-black/20 -rotate-6 hover:rotate-6 transition-all">
        <img
          className="w-full h-16 lg:h-20 rounded object-cover "
          src="/yo.webp"
        />
      </div>
      <div className="w-16 lg:w-20  bg-white h-20 lg:h-24 rounded p-2 shadow border-black/20 rotate-6 -ml-2 hover:-rotate-6 transition-all ">
        <img
          className="w-full h-16 lg:h-20 rounded object-cover"
          src="/yo2.webp"
        />
      </div>
      <a
        href="mailto:bremin11.20.93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-16 lg:w-20  bg-white h-20 lg:h-24 rounded p-2 shadow border-black/20 -rotate-6 -ml-2 hover:rotate-6 transition-all">
          <div className="w-full h-16 lg:h-20 rounded grid place-content-center  bg-[#F2C94C]">
            <img className="w-10" src="/projects/mail.svg" />
          </div>
        </div>{" "}
      </a>
    </div>
  );
};

const Word = ({
  children,
  scrollYProgress,
  range,
}: {
  range: number[];
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
}) => {
  const spring = useSpring(scrollYProgress, { bounce: 0 });
  // const opacity = useTransform(spring, range, [0.1, 1]);
  const color = useTransform(scrollYProgress, range, ["#DCDCDC", "#000000"]);
  const shadow = useTransform(scrollYProgress, range, [
    "#9346ed 1px 0 10px",
    "#000000 1px 0 10px",
  ]);
  const filter = useTransform(scrollYProgress, range, [
    "blur(10px)",
    "blur(0px)",
  ]);
  const y = useTransform(scrollYProgress, range, [50, 0]);
  const skewX = useTransform(scrollYProgress, range, [20, 0]);
  // const scale = useTransform(spring, range, [1.1, 1]);
  return (
    <motion.span
      className="font-subtitle"
      style={{
        color,
        // filter,
        // y,
        skewX,
        // scale,
      }}
    >
      {children}
    </motion.span>
  );
};

const Skills = ({
  titles = [" "],
  images = [" "],
}: {
  titles?: string[];
  images?: string[];
}) => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  return (
    <section ref={target} className="h-[300vh] lg:h-[350vh] scrollbar">
      <div className="sticky top-0 bg-black pt-10 lg:pt-40 h-[105vh] text-white">
        <div className="grid place-content-center h-full pt-0">
          <div>
            <p className="text-lg md:text-xl text-graylight text-center font-light mb-10">
              What I do?
            </p>
            <RotatorsImages scrollYProgress={scrollYProgress} images={images} />
            <Rotators scrollYProgress={scrollYProgress} titles={titles} />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

const RotatorsImages = ({
  images,
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
  images: string[];
}) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const range = [
    [0, 0.12, 0.25, 0.27],
    [0.25, 0.27, 0.47, 0.49],
    [0.47, 0.5, 0.75, 0.77],
    [0.75, 0.77, 1, 1],
  ];

  return (
    <motion.main
      style={{ perspective: 1000, transformStyle: "preserve-3d", y }}
      className=" relative  items-center h-0 bg-pink-700 justify-center mb-40 lg:mb-48 z-20 "
    >
      {images.map((image, i) => (
        <RotatorImages
          i={i}
          key={i}
          range={range[i]}
          scrollYProgress={scrollYProgress}
          image={image}
        />
      ))}
    </motion.main>
  );
};

const RotatorImages = ({
  image,
  scrollYProgress,
  range,
  i,
}: {
  range: number[];
  scrollYProgress: MotionValue<number>;
  image: string;
  i: number;
}) => {
  const getInitialValue = (initial: number | string, final: number | string) =>
    i === 0 ? initial : final;

  const opacity = useTransform(scrollYProgress, range, [
    i === 0 ? 1 : 0,
    1,
    1,
    i === 3 ? 1 : 0,
  ]);

  const scale = useTransform(scrollYProgress, range, [
    getInitialValue(1, 0.6),
    1,
    1,
    i === 3 ? 1 : 0.5,
  ]);
  const filter = useTransform(scrollYProgress, range, [
    getInitialValue("blur(0px)", "blur(4px)"),
    "blur(0px)",
    "blur(0px)",
    i === 3 ? "blur(0px)" : "blur(4px)",
  ]);
  return (
    <motion.img
      className=" h-32 lg:h-40 w-auto mx-auto  absolute inset-0 "
      style={{ opacity, filter, scale }}
      src={image}
    />
  );
};

const Rotators = ({
  titles,
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
  titles: string[];
}) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  return (
    <motion.main
      style={{ perspective: 1000, transformStyle: "preserve-3d", y }}
      className="flex flex-col  relative    items-center h-full justify-center text-4xl lg:text-7xl font-extrabold gap-10 "
    >
      {titles.map((title, i) => (
        <Rotator
          key={i}
          range={[(1 / titles.length) * i, (1 / titles.length) * (i + 1)]}
          scrollYProgress={scrollYProgress}
        >
          {title}
        </Rotator>
      ))}
      <motion.h2 className="tracking-wide uppercase text-center">
        Web development
      </motion.h2>
    </motion.main>
  );
};

const Rotator = ({
  children,
  scrollYProgress,
  range,
}: {
  range: number[];
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
}) => {
  const rotateX = useTransform(scrollYProgress, range, [0, 60]);
  const opacity = useTransform(scrollYProgress, range, [1, 0]);
  const scale = useTransform(scrollYProgress, range, [1, 0.8]);
  return (
    <motion.h2
      className="tracking-wide uppercase text-center"
      style={{ rotateX, opacity, scale }}
    >
      {children}
    </motion.h2>
  );
};
