import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";
import { useEffect } from "react";

export default function easybits() {
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
      <section className="max-w-7xl mx-auto  w-[90%] md:w-ful pt-4 md:pt-16  pb-20">
        <div className="w-full bg-easybits flex items-center h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            alt="cover"
            className="h-auto w-full  md:w-[80%] mx-auto "
            src="/projects/easybits/cover.webp"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-dark text-xs absolute -top-10">
                <span className="text-dark hover:text-easybits font-bold">
                  {" "}
                  Projects{" "}
                </span>{" "}
                ⇢ <span className="text-dark"> EasyBits</span>
              </p>
            </Link>
            <a
              href="https://www.easybits.cloud/inicio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-[160px] hover:scale-90 transition-all"
                src="/projects/easybits/logo-easybits.webp"
              />
            </a>
            <div className="flex flex-wrap gap-3 mt-6">
              <Tag variant="outline" label="Product Design" />
              <Tag variant="outline" label="Fronted" />{" "}
              <Tag variant="outline" label="WebApp" />
              <Tag variant="outline" label="Saas" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 text-black ">
              Enero - Julio 2025
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 text-black ">
              Product Designer & Web developer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl text-black ">
              Easybits is a Saas platform that{" "}
              <span className="text-easybits  font-bold">
                empowers independent creators to sell digital products with
                ease.{" "}
              </span>
            </p>
            <p className="text-xl md:text-2xl text-black mt-6 ">
              In EasyBits, creators can sell{" "}
              <span className="text-easybits  font-bold">
                a wide range of downloadable assets — from books, images, and
                illustrations to 3D models, templates, mockups, code, or
                anything they create.
              </span>{" "}
            </p>
            <p className="text-xl md:text-2xl text-black mt-6">
              The platform not only allows users to sell their products, but
              also to customize the visual style of their website, set up a
              custom domain, securely store their files, and boost visibility by
              joining the EasyBits Community.
            </p>
            <p className="text-xl md:text-2xl text-black mt-6">
              The objective of this project was to design an optimized, useful
              and user-friendly web application that provides a complete suite
              of services for creating and selling digital assets. The focus was
              on delivering a seamless experience that balances functionality,
              usability, and performance.
            </p>
            <p className="text-xl md:text-2xl text-black mt-6">
              In this case study, I’ll walk through the full product design
              lifecycle — from user research and ideation to high-fidelity UI
              design and implementation — highlighting key decisions,
              challenges, and solutions throughout the process.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />

        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Defining the problem
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            Easybits' mission is to become the favorite and easier selling
            platform for digital creators. While there are international
            platforms available, they are not widely used by creators in Mexico.
            Are there unmet needs? Is the user experience truly satisfying?
            These questions led us to investigate more deeply. We set out to
            understand how current platforms align with real user needs — and
            where we could improve and stand out.
          </p>
          <p className="text-xl md:text-2xl text-black mt-6">
            Guided by these questions and assumptions, we worked on a Benchmark
            to analyze and compare existing platforms in the market.
          </p>
          <div className="px-0 md:px-[10%] mt-10 md:mt-20">
            <img
              alt="benchmark"
              className=""
              src="/projects/easybits/img1.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Personas
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            In addition, we carried out in-depth interviews with 20 participants
            to uncover key pain points and opportunities for improvement,
            helping us define clear actions to move forward. Based on both
            quantitative and qualitative user research we defined 3 user
            personas.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
            <div className="w-full md:w-[380px] grow">
              <img
                alt="user persona"
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/easybits/user1.webp"
              />
              <p className="text-base text-black font-title mt-8">
                {" "}
                Gina: The beginner
              </p>
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="user persona"
                className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
                src="/projects/easybits/user2.webp"
              />
              <p className="text-base text-black font-title mt-8">
                {" "}
                Pablo: The creative
              </p>
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="user persona"
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/easybits/user3.webp"
              />
              <p className="text-base text-black font-title mt-8">
                {" "}
                Andrea: The expert
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            What did data tell us?
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            Important findings to come out of this user testing:
          </p>
          <ul>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-easybits font-bold">
                {" "}
                • 55% of users
              </span>{" "}
              have tried a selling platform, but 82% of them either didn’t fully
              understand how to use it or felt it didn’t meet their needs.
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-easybits font-bold">
                {" "}
                • 45% of users
              </span>{" "}
              haven’t used any platform yet, but are interested in selling
              digital assets such as guides, illustrations, drawings, or
              courses.
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-easybits font-bold">
                {" "}
                • Only 5% of users{" "}
              </span>{" "}
              have actually sold something digitally
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-easybits font-bold"> •</span> 70% of users
              have created digital resouces like guides, drawings and
              illustrations
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-easybits font-bold">
                {" "}
                • 90% of users{" "}
              </span>{" "}
              are unsure about how to sell digital assets.
            </li>
          </ul>
          <div className="flex items-center justify-around mt-20 gap-y-6 md:gap-y-0 flex-wrap lg:flex-nowrap">
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/easybits/img2.webp"
            />
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/easybits/img3.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Plan of Action
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            With all of this in mind, the challenges and objectives centered
            around addressing the users’ key needs. The design and product teams
            came together to brainstorm ideas and propose solutions for our main
            challenge: how to create a tool that enables users to sell different
            types of digital products from start to finish.
          </p>

          <p className="text-xl md:text-2xl text-black mt-6">
            After evaluating our ideas, considering technical constraints,
            bearing in mind business requeriments and aligning on the kind of
            user experience we wanted to deliver, we prioritized the minimum set
            of features needed to offer a true end-to-end experience:
          </p>
          <img
            alt="moscow"
            className="w.full md:w-[80%] mx-auto mt-10"
            src="/projects/easybits/img4.webp"
          />
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Ideation
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            Ideation phase was based on the architecture information definition
            before starting with the high fidelity to after come back to work on
            the user flows:
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-12">
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="site map"
                className="rounded-2xl h-[200px] lg:h-[340px] object-cover object-top w-full border border-white/10"
                src="/projects/easybits/img16.webp"
              />
              <h3 className="text-black text-xl mt-6 font-semibold">
                Site Map
              </h3>
              <p className="text-xl text-black mt-2">
                {" "}
                I defined the hierarchical structure of the platform with the
                help of a card sorting session.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="user flow"
                className="rounded-2xl h-[200px] lg:h-[340px] w-full object-cover border border-dark/10"
                src="/projects/easybits/img5.webp"
              />
              <h3 className="text-black text-xl font-semibold mt-6">
                User Flow: A sketching session
              </h3>
              <p className="text-xl text-black mt-2">
                I explored different proposals and conduct a deeper analysis of
                the best ideas to choose one.
              </p>
            </div>
          </div>
          <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Design
          </h2>
          <p className="  text-black text-xl mt-10">
            {" "}
            I moved on to high-fidelity wireframes, beginning with an
            exploration of different visual styles. Guided by the brand’s
            mission and values, the chosen direction was Neo-brutalism.
          </p>
          <p className="  text-black text-xl mt-10">
            Taking into account the key traits of Neo-brutalist UI, I chose
            using a pastel color palette, solid shadows, geometric shapes, thick
            borders, and a clean sans-serif typeface to bring the look to life.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 my-20">
            <div className="w-full md:w-[380px] grow">
              <img
                alt="neobrutalism"
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/easybits/img6.webp"
              />
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="neobrutalism"
                className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
                src="/projects/easybits/img7.webp"
              />
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="neobrutalism"
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/easybits/img8.webp"
              />
            </div>
          </div>

          <p className="  text-black text-xl mt-10 mb-12">
            After getting approval on the visual style through a moodboard, I
            created the style guide and began designing the user flows in high
            fidelity, including both happy and unhappy paths, illustrations, and
            emails. After a few weeks of work, this was the resulting UI
            proposal:
          </p>
          <img
            alt="figma"
            className="col-span-1 rounded-xl  transition-all mb-12 "
            src="/projects/easybits/img17.webp"
          />
          <img
            alt="screens"
            className="col-span-1 rounded-xl  transition-all "
            src="/projects/easybits/img13.webp"
          />
          <img
            alt="mails"
            className=" rounded-xl  transition-all mt-12"
            src="/projects/easybits/img15.webp"
          />
          <p className="  text-black text-xl mt-20">
            Additionally, I created social media post templates to ensure visual
            consistency across various communication channels, including the
            following examples:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 my-10 md:my-20">
            <img
              alt="social media post"
              className="col-span-1 rounded-xl rotate-3 hover:-rotate-3 transition-all"
              src="/projects/easybits/img9.webp"
            />

            <img
              alt="social media post"
              className="col-span-1 rounded-xl -rotate-3 hover:rotate-3 transition-all"
              src="/projects/easybits/img10.webp"
            />

            <img
              alt="social media post"
              className="col-span-1 rounded-xl rotate-3 hover:-rotate-3 transition-all"
              src="/projects/easybits/img11.webp"
            />

            <img
              alt="social media post"
              className="col-span-1 rounded-xl -rotate-3 hover:rotate-3 transition-all"
              src="/projects/easybits/img12.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Measuring Success & Next steps
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            The next step is the beta launch. We've implemented Google Analytics
            and Hotjar to track user behavior and analyze their journey through
            the platform, helping us identify pain points and areas for
            improvement in the next iteration cycle. The launch is scheduled for
            July 2025.
          </p>
          <img
            alt="fur"
            className="w-20 mt-10"
            src="/projects/easybits/img14.webp"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
