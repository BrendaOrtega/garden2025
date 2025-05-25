import { Navbar } from "~/components/Navbar";
import { ScrollHorizontal, Tag } from "~/components/ScrollHorizontal";
import { Button } from "~/components/Button";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Footer } from "./home";
import { ScrollGallery } from "~/components/ScrollGallery";
import { db } from "~/.server/db";
import type { Route } from "./+types/blog";
import type { Post } from "@prisma/client";
import { Link } from "react-router";
import { useEffect } from "react";
import getBasicMetaTags from "~/utils/getBasicMetaTags";

export const meta = () =>
  getBasicMetaTags({
    title: "Blog",
    description: "Find some design & dev tips",
  });

export const loader = async () => {
  const posts = await db.post.findMany({
    orderBy: { index: "desc" },
  });
  return { posts };
};

export default function Blog({ loaderData }: Route.ComponentProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { posts } = loaderData;
  return (
    <section className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 lg:py-40">
        <div className=" flex justify-center gap-4 h-[112px]">
          <h2 className="text-4xl lg:text-7xl font-title text-center  ">
            Find some
          </h2>
          <img
            className="w-20 lg:w-32 -mt-3 lg:-mt-6 h-16 md:h-fit"
            src="/cartel1.webp"
            alt="blog cartel"
          />
          <h2 className="text-4xl lg:text-7xl font-title text-center  ">
            tips
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-20 mt-0 lg:mt-32 px-4 md:px-[5%] xl:px-0">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className=" relative bg-center rounded-4xl overflow-hidden  col-span-1 h-[480px] cursor-pointer  flex items-end justify-center  group ">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-all"
          src={post.metaImage}
          alt="meta image"
        />
        <div className="bg-[url(/surface.png)] w-full h-full flex items-end pl-2 pb-4 -ml-[1px] mt-[1px] bg-no-repeat z-20 ">
          <div>
            <h3 className="text-xl font-title w-[80%] mb-3 group-hover:underline decoration-brand transition-all ">
              {post.title}
            </h3>
            <div className=" flex gap-3 text-graylight">
              <Tag label={post.tag} />
              <Tag label={post.subTag} />
            </div>{" "}
          </div>
        </div>
      </div>
    </Link>
  );
};
