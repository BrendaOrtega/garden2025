// import styles from "~/styles/markdown.css";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
// import dbConnection from "~/db/db.server";
import { useEffect, useRef } from "react";
import { Link, redirect, useLoaderData } from "react-router";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaArrowUpLong,
  FaFacebookF,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Navbar } from "~/components/Navbar";
import { db } from "~/.server/db";
import type { Route } from "./+types/blogpost";
import Markdown from "~/components/MarkDown";
import { CircularButton } from "~/components/CircularButton";

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export const loader = async ({ params }: Route.LoaderArgs) => {
  const post = await db.post.findUnique({
    where: {
      slug: params.slug,
    },
  });
  if (!post) {
    throw redirect("/blog");
  }
  return { post };
};

export default function Page({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // HACK PARA ASEGURARSE DE QUE EL TRACING FUNCIONE
  // useEffect(() => {
  //   if (localStorage.getItem("initial") === "1") {
  //     localStorage.removeItem("initial");
  //   } else {
  //     localStorage.setItem("initial", "1");
  //     setTimeout(() => location.reload(), 100);
  //   }
  // }, []); //

  return (
    <section className="bg-white min-h-screen ">
      <Navbar />

      <div className="pt-0 lg:py-8 max-w-xl relative mx-auto">
        <div
          style={{ backgroundImage: `url('${post.metaImage}')` }}
          className="w-full h-[280px] mb-6 lg:h-[280px] bg-cover bg-bottom rounded-2xl  "
        />
        <div className="relative">
          <Link to="/blog">
            <button
              className="text-gray-600 cursor-pointer bg-gray-100 -left-[88px] top-4 rounded-lg flex justify-center items-center text-2xl
             h-10 w-[56px] absolute"
            >
              <HiOutlineArrowSmLeft />
            </button>
          </Link>
          <h2 className="px-4 md:px-[5%] xl:px-0 pb-4 underline decoration-brand w-full text-3xl lg:text-5xl md:text-[40px] leading-normal mt-10 md:mt-[inherit] text-black font-title ">
            {" "}
            {post.title}
          </h2>
        </div>

        <div className="flex justify-between border-b-[1px] items-center border-black/10 pb-8 px-4 md:px-[5%] xl:px-0">
          <div className="flex gap-4">
            <div
              // style={{ backgroundImage: `url(${post.authorImage})` }}
              style={{ backgroundImage: "url(/yo2.webp)" }}
              className="w-12 h-12 rounded-full bg-cover bg-center "
            />
            <div>
              <p className="mb-0 font-bold text-black font-title">
                Brenda Gonzalez Ortega
              </p>
              <p className="text-graylight">
                {/* {post.authorAt} */}
                @brenda-ort
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a>
              <FaFacebookF className="text-sm" />
            </a>
            <a>
              <FaLinkedinIn />
            </a>
            <a>
              <FaXTwitter />
            </a>
            <a>
              <FaLink />
            </a>
          </div>
        </div>
        <div className="text-black mb-32 px-4 md:px-[5%] xl:px-0">
          <Markdown>{post.body}</Markdown>
        </div>
      </div>
      <Suscription />
    </section>
  );
}

export const Suscription = () => {
  const handleClick = () => {
    const node = document.querySelector("#top");
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="bg-black  py-32 text-center relative px-4 md:px-[5%] xl:px-0 overflow-hidden md:overflow-auto ">
      <img className="-top-10 right-72 absolute w-24" src="/loader3.gif" />
      <h3 className="text-4xl font-title md:text-6xl text-white font-bold ">
        Enjoying these posts?
      </h3>
      <p className="text-lg md:text-xl text-graylight font-light mt-4 lg:mt-12 max-w-2xl mx-auto">
        Subscribe to get more content like this delivered to your inbox for
        free! Only good stuff, no spam.
      </p>

      <div className="mt-8">
        <iframe
          frameBorder="0"
          id="formmy-iframe"
          title="formmy"
          width="100%"
          height="180"
          src="https://www.formmy.app/embed/67cca853195dc4d556cb7655"
          style={{ margin: "0 auto", display: "block" }}
        ></iframe>{" "}
      </div>
      <div className="text-white/20 flex gap-4 justify-center mt-6 text-3xl">
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

      <div
        onClick={handleClick}
        className="absolute -right-6 lg:right-16 bottom-2 lg:bottom-16  "
      >
        <span className=" absolute w-full h-full grid place-content-center">
          <FaArrowUpLong className="text-white text-2xl mx-auto" />
        </span>
        <CircularButton />
      </div>
    </section>
  );
};
