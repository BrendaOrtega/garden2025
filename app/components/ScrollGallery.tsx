import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { useFakeData, type Group } from "~/hooks/useFakeData";

import { images as staticImages } from "~/hooks/useFakeData";
import { useMatchMedia } from "~/hooks/useMatchMedia";
import { cn } from "~/utils/cn";

const ranges = [
  [0, 0.2],
  // [0, 0.2],
  [0.3, 0.4],
  [0.5, 0.6],
  [0.55, 0.7],
  [0.7, 1],
];

export const ScrollGallery = ({
  title = "Fixtergeek.com",
  subtitle = "Diseñado por Brendi. 👧🏻",
  images = staticImages,
}: {
  images: string[];
  title: string;
  subtitle: string; // must contain at least 2 words
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(99);
  const splitSubtitle = subtitle.split(" ");
  const target = useRef(null);
  const { scrollYProgress } = useScroll({ target });
  const springYProgress = useSpring(scrollYProgress, { bounce: 0 });
  const exactIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8], // 5 sections+
    [0, 1, 2, 3, 4]
  );

  useMotionValueEvent(exactIndex, "change", (latest) => {
    const index = Math.floor(latest);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  });

  const { groups } = useFakeData();

  return (
    <article
      ref={target}
      className="text-white h-[500vh]  relative hidden md:block "
    >
      <section className="sticky top-0 h-[88vh] flex justify-center items-center gap-6 ">
        <main>
          <Block
            onMouseLeave={() => setIsHovered(99)}
            scrollYProgress={springYProgress}
          >
            {groups.map((g, i) => (
              <AnimatedGallery
                range={ranges[i]}
                scrollYProgress={springYProgress}
                key={i}
                onMouseEnter={() => {
                  setIsHovered(i);
                }}
                isPlaying={isHovered === i}
                srcset={[images[i], ...g.images]}
              />
            ))}
          </Block>
        </main>
        <footer className="w-[820px] bg-amber-600"></footer>
      </section>
      <section className="absolute top-0 flex flex-col h-max  ">
        {/* <div className="h-[90vh]" /> */}
        {groups.map((g, i) => (
          <Actions
            isActive={currentIndex === i}
            scrollYProgress={scrollYProgress}
            range={ranges[i + 1]}
            group={g}
            key={i}
            isLast={groups.length - 1 === i}
          />
        ))}
      </section>
    </article>
  );
};

const Actions = ({
  group,
  range,
  scrollYProgress,
  isActive,
  isLast,
}: {
  isLast?: boolean;
  isActive?: boolean;
  range: number[];
  group: Group;
  scrollYProgress: MotionValue<number>;
}) => {
  // const y = useTransform(scrollYProgress, range, ["50vh", "0vh"]);
  return (
    <motion.div
      className={cn(
        "h-screen lg:flex flex-col pl-[50%] gap-6 hidden justify-center ",
        {
          // "h-[70vh]": isLast,
        }
      )}
    >
      <h3 className="text-5xl text-black font-title">{group.title}</h3>

      <p
        className={cn(" transition-all  text-2xl text-gray-300", {
          "text-black ": isActive,
        })}
      >
        {group.paragraph}
      </p>
      <div className="flex gap-4 mt-12">
        {group.links.map((l, i) => (
          <a href={l.link} target="_blank" rel="noopener noreferrer">
            <button
              key={i}
              className={cn(
                "hover:scale-110 cursor-pointer transition-all",
                "py-3 px-6 bg-gray-200 text-black rounded-full",
                {
                  "bg-white text-black": i === 1,
                  "bg-transparent border-2": i === 2,
                }
              )}
            >
              {l.text}
            </button>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

const AnimatedGallery = ({
  isPlaying,
  srcset,
  onMouseLeave,
  onMouseEnter,
  scrollYProgress,
  range,
  noClipPath,
}: {
  noClipPath?: boolean;
  range: number[];
  scrollYProgress: MotionValue<number>;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  isPlaying?: boolean;
  srcset: string[];
}) => {
  const [current, setCurrent] = useState(0);
  const addOne = (c: number) => (c + 1) % srcset.length;
  const [next, setNext] = useState(addOne(0));
  const interval = useRef<ReturnType<typeof setInterval>>(null);
  const y = useTransform(scrollYProgress, range, [30, 0]);
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  const percentage = useTransform(scrollYProgress, range, [0, 500]);
  const pixels = useTransform(scrollYProgress, range, [0, 700]);
  // 45% 0px at 50% 100% => 165% 586px at 50% 100%
  const clipPath = noClipPath
    ? "ellipse(100% 100%)"
    : useMotionTemplate`ellipse(${percentage}% ${pixels}px at 50% 100%)`;

  useEffect(() => {
    if (isPlaying) {
      interval.current = setInterval(() => {
        setCurrent(addOne);
        setNext(addOne);
      }, 800);
    } else {
      interval.current && clearInterval(interval.current);
      setCurrent(0);
      setNext(addOne(0));
    }
    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [isPlaying]);
  return (
    <motion.div
      className="absolute inset-0 "
      style={{
        // backgroundImage: `url('${srcset[next]}')`,
        backgroundPosition: "cover",
        backgroundColor: "#9346ed",
        backgroundSize: "cover",
        clipPath,
        y,
      }}
    >
      <AnimatePresence>
        <motion.img
          className=""
          onMouseEnter={onMouseEnter}
          key={current}
          src={srcset[current]}
          initial={{ skewY: 15, scale: 1.5, opacity: 0 }}
          animate={{ skewX: 0, skewY: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0 }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

const Block = ({
  scrollYProgress,
  children,
  onMouseLeave,
  onMouseEnter,
  ...props
}: {
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
  children?: ReactNode;
  scrollYProgress: MotionValue<number>;
  [x: string]: unknown;
}) => {
  const images = Children.toArray(children);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "overflow-hidden outline-solid outline-black/5 bg-cover bg-center lg:w-[24vw] lg:h-[60vh] w-[40vw] h-[50vh] bg-transparent rounded-3xl denik",
        "relative"
        // "bg-indigo-500"
      )}
      style={{
        // backgroundImage: "url('/projects/denik2.png')",
        backgroundSize: "cover",
      }}
      {...props}
    >
      {images}
    </div>
  );
};

const AnimatedImage = ({
  range = [1, 1], // fixed
  index,
  node,
  scrollYProgress,
  noClipPath,
}: {
  noClipPath?: boolean;
  scrollYProgress: MotionValue<number>;
  range?: number[];
  node: ReactNode;
  index: number;
}) => {
  const y = useTransform(scrollYProgress, range, [30, 0]);
  const percentage = useTransform(scrollYProgress, range, [0, 500]);
  const isDesktop = useMatchMedia("(min-width: 1024px)");
  const pixels = useTransform(scrollYProgress, range, [
    0,
    isDesktop ? 700 : 600,
  ]);
  // 45% 0px at 50% 100% => 165% 586px at 50% 100%
  const clipPath = noClipPath
    ? "ellipse(100% 100%)"
    : useMotionTemplate`ellipse(${percentage}% ${pixels}px at 50% 100%)`;
  return (
    <motion.figure
      className="absolute left-0 right-0 -top-4 -bottom-4"
      style={{
        y,
        clipPath,
      }}
    >
      {node}
    </motion.figure>
  );
};

// @todo animated underlines?
type Stroke = {
  color: string;
  range: [number, number];
};
const AnimatedUnderline = ({
  colors,
  scrollYProgress,
}: {
  colors?: string[];
  scrollYProgress: MotionValue<number>;
  target?: RefObject<HTMLDivElement>;
}) => {
  const map: Stroke[] = [
    {
      // color: "#ffb7e4", // pink
      color: "#5e60f6", // indigo
      range: [0, 0.2],
    },

    {
      color: "#ffb7e4", // pink
      range: [0.3, 0.4],
    },
    {
      // color: "#da3e05",
      color: "#da3e05", // orange
      range: [0.5, 0.6],
    },
    {
      color: "#ffb7e4", // pink
      range: [0.55, 0.7],
    },
    {
      color: "#5e60f6", // indigo
      range: [0.6, 1],
    },
  ];

  return (
    <svg
      className="-ml-2"
      viewBox="0 0 165 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {map.map((stroke, i) => (
        <AnimatedPath
          key={i}
          stroke={stroke}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </svg>
  );
};

const AnimatedPath = ({
  stroke,
  scrollYProgress,
}: {
  stroke: Stroke;
  scrollYProgress: MotionValue<number>;
}) => {
  const pathLength = useTransform(scrollYProgress, stroke.range, [0.01, 1]);
  return (
    <motion.path
      key={stroke.color}
      d="M3 10C33.5381 4.0372 85.7179 -2.19674 162 9.99985"
      stroke={stroke.color}
      strokeWidth="5"
      strokeLinecap="round"
      style={{ pathLength }}
    ></motion.path>
  );
};
