import { useAnimate, useTime, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const CircularButton = ({
  letters = "back*to*the*top*",
}: {
  letters?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const controls = useRef<any>(null);

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], {
    clamp: false,
  });

  useEffect(() => {
    controls.current = animate(
      scope.current,
      { rotate: 360 },
      { duration: 6, ease: "linear", repeatType: "loop", repeat: Infinity }
    );
  }, []);

  useEffect(() => {
    if (hover) {
      // controls.current.pause();
      controls.current.speed = 1.5;
    } else {
      controls.current.speed = 0.5;
    }
  }, [hover]);

  return (
    <motion.section
      // whileHover={{
      //   scale: 1.2,
      //   rotate: 360,
      //   transition: { duration: 10000 },
      // }}
      // style={{
      //   rotate:360,

      // }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={scope}
      className={`w-[160px] h-[160px] scale-50 md:scale-100 origin-center  grid place-content-center cursor-pointer `}
    >
      {letters.split("").map((l, index) => (
        <Letter index={index} key={index} letter={l} />
      ))}
    </motion.section>
  );
};

const Letter = ({ index, letter }: { index: number; letter: string }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const [width, height] = [180, 180]; // hacked & fixed
    const increase = (Math.PI * 2) / 16; // 360deg / 8
    const angle = index * increase;
    const x = (width / 2.6) * Math.cos(angle) + width / 2.4; // magic numbers 🪄
    const y = (height / 2.6) * Math.sin(angle) + height / 2.6;
    // movemos
    animate(scope.current, {
      x,
      y,
      rotateZ: (360 / 16) * index,
      rotate: 90,
    });
  }, []);
  return (
    <p
      className="absolute font-title font-bold uppercase text-white "
      ref={scope}
    >
      {letter}
    </p>
  );
};
