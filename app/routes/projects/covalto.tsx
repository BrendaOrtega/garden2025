import { useEffect } from "react";
import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";

export default function constructoken() {
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
        <div className="w-full h-[280px] md:h-[680px] overflow-hidden rounded-[40px] bg-[#FFA800]">
          <img
            className="h-auto w-full md:w-[80%] mx-auto "
            src="/projects/covalto/cover2.webp"
            alt="cover"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-dark text-xs absolute -top-10">
                <span className="text-dark hover:text-covalto font-bold">
                  {" "}
                  Projects{" "}
                </span>{" "}
                ⇢ <span className="text-dark"> Covalto</span>
              </p>
            </Link>

            <a
              href="https://covalto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-20 md:w-[120px] hover:scale-90 transition-all"
                src="/projects/covalto/logo.webp"
              />
            </a>
            <div className="flex flex-wrap gap-4 mt-6">
              <Tag variant="outline" label="Product Design" />
              <Tag variant="outline" label="Mobile App" />
              <Tag variant="outline" label="IOS/Android" />
              <Tag variant="outline" label="Fintech" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className=" font-semibold font-title text-xl mt-10 mb-1">Date</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              Junio 2020 - Junio 2022
            </p>
            <p className=" font-semibold font-title text-xl mt-10 mb-1">Role</p>
            <p className="text-base text-iron-500 dark:text-iron-300 ">
              UX/UI Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl dark:text-iron-300">
              Covalto is a Bank that was born from the Credijusto acquisition of
              Banco Finterra. This new bank
              <span className="text-covalto">
                {" "}
                offers financial products{" "}
              </span>{" "}
              such as personal and corporate loans, debit accounts, factoring
              and leasing services, and investment instruments. But, one of its
              main goals in 2022 was to launch a corporate credit card that
              would provide the best option to manage business expenses.
            </p>
            <p className="text-xl md:text-2xl mt-4 dark:text-iron-300">
              The challenge was to
              <span className="text-covalto">
                {" "}
                design a mobile application or web app{" "}
              </span>{" "}
              that allowed companies to request a corporate expense account card
              that was 100% digital, where the users can request and assign
              expense cards for their employees, but be able to monitor and
              restrict approved expenses on each card.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Understanding the problem - User needs
          </h2>
          <p className="text-xl mt-4 dark:text-iron-300">
            To understand the user needs connected with the corporate credit
            card, I started with research that was composed by following:
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-10 md:mt-16">
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="benchmark"
                className="rounded-2xl h-[280px] w-full object-cover"
                src="/projects/covalto/img6.webp"
              />
              <h3 className="text-xl text-title font-semibold mt-6">
                Benchmark
              </h3>
              <p className="text-xl dark:text-iron-300 mt-2">
                We identified 20 options in local and international markets with
                a similar offer. Then, we analyzed and compared these financial
                products.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="interviews"
                className="rounded-2xl h-[280px] object-cover w-full"
                src="/projects/covalto/img8.webp"
              />
              <h3 className="text-xl text-title font-semibold mt-6">
                Interviews
              </h3>
              <p className="text-xl dark:text-iron-300 mt-2">
                {" "}
                I conducted deep-dive interviews with 12 participants to
                understand the needs, pain points, and areas of opportunity
                around corporate credit card services.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            User Personas & Journeymap
          </h2>
          <p className="text-xl mt-4 dark:text-iron-300">
            After gleaning valuable insights from the 'understand' phase, we
            created three user personas of which we will only focus on two.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-10 md:mt-20">
            <div className="w-full md:w-[380px] grow transition-all">
              <img
                alt="user persona"
                className="rounded-2xl  w-full object-cover rotate-3 hover:-rotate-3 transition-all"
                src="/projects/covalto/user1.webp"
              />
              <p className="text-sm dark:text-iron-300 mt-8">
                Sofia manages the company's cards and expenses and is the one
                who is responsible for limiting employee spending and justifying
                all company expenses.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow transition-all">
              <img
                alt="user persona"
                className="rounded-2xl  object-cover w-full -rotate-3 hover:rotate-3 transition-all"
                src="/projects/covalto/user2.webp"
              />

              <p className="text-sm dark:text-iron-300 mt-8 ">
                {" "}
                Juan Carlos uses the business card for his daily expenses as a
                sales agent, but he has difficulties managing his expenses and
                being able to pay with it.
              </p>
            </div>
          </div>
          <p className="text-xl mt-20 dark:text-iron-300 ">
            A customer journey map was created to map the process step by step,
            from the need for the business credit card to its use or
            cancellation.
          </p>
          <div className="flex mt-16 gap-10">
            <img
              alt="user journey"
              className="rounded-2xl  object-cover "
              src="/projects/covalto/img2.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            What did data tell us?
          </h2>
          <p className="text-xl md:text-2xl dark:text-iron-300 mt-6">
            Important findings from these surveys included:
          </p>
          <ul>
            <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              {" "}
              <span className="text-covalto">
                {" "}
                • 66% of users (companies)
              </span>{" "}
              use business cards or prepaid employee living expense cards
            </li>
            <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              {" "}
              <span className="text-covalto"> • 58% of companies</span> use
              platforms that don't have card spending restriction options
            </li>
            <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              {" "}
              <span className="text-covalto"> • </span>
              Employees who use prepaid employee cards don't have an application
              to manage their expenses
            </li>
            <li className="text-xl md:text-2xl dark:text-iron-300 mt-6">
              {" "}
              <span className="text-covalto"> • 23% of users </span> have
              problems paying with their TDC (they are not accepted in all
              establishments)
            </li>
          </ul>
          <div className="flex justify-around mt-20 flex-wrap md:flex-nowrap">
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/covalto/comment1.webp"
            />
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/covalto/comment2.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Definition
          </h2>
          <p className="text-xl mt-4 dark:text-iron-300 ">
            Working closely with the Product VP, we worked with each user type
            to define the features that the app must have to meet the business
            goals and the user's needs; therefore, improving their experience
            using business cards.*
          </p>
          <img
            alt="moscow"
            className="rounded-2xl  object-cover mt-10 "
            src="/projects/covalto/img9.webp"
          />
          <p className="text-xs mt-4 dark:text-iron-300 ">
            *Some details of the product and process have been changed or
            omitted for privacy reasons.
          </p>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Ideation & Prototyping
          </h2>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-12">
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="site map"
                className="rounded-2xl h-[200px] w-full object-cover"
                src="/projects/covalto/img3.webp"
              />
              <h3 className="text-black font-title text-xl mt-6">Site map</h3>
              <p className="text-xl dark:text-iron-300 mt-2">
                To ensure that content is found in the places where users expect
                to find it, I conducted an card sorting session with some users.
              </p>
            </div>

            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="wireframes"
                className="rounded-2xl h-[200px] object-cover w-full"
                src="/projects/covalto/img4.webp"
              />
              <h3 className="text-black font-title text-xl mt-6">
                Wireframing
              </h3>
              <p className="text-xl dark:text-iron-300 mt-2">
                {" "}
                With the site map defined, I moved forward to design
                low-fidelity wireframes.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="blueprint"
                className="rounded-2xl h-[200px] object-cover w-full"
                src="/projects/covalto/img5.webp"
              />
              <h3 className="text-black font-title text-xl mt-6">Blueprint</h3>
              <p className="text-xl dark:text-iron-300 mt-2">
                We identified some issues with the company document verification
                process, so I worked on a service blueprint to define the
                workflow.
              </p>
            </div>
          </div>
          <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
          <h2 className="text-3xl md:text-4xl font-bold  text-black">Design</h2>
          <h3 className="text-black font-title text-xl mt-12">
            High fidelity wireframes
          </h3>
          <p className="text-xl dark:text-iron-300 mt-2">
            After reviewing the mid-fidelity wireframes with the product and
            development team, I continued with high-fidelity wireframes for IOS
            and Android.
          </p>
          <img
            alt="wireframes"
            className=" object-cover w-full"
            src="/projects/covalto/img7.webp"
          />
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />{" "}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  text-black">
            Next steps
          </h2>
          <p className="text-xl dark:text-iron-300 mt-2">
            Continuing to iterate the app, a beta launch to test the app
            (experientially and functionally) with real users was scheduled for
            February 2022. Iterations continued after this testing cycle.
          </p>
          <img
            alt="fur"
            className="w-20 mt-10"
            src="/projects/covalto/fur.webp"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
