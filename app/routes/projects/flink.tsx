import { Link } from "react-router";
import { Navbar } from "~/components/Navbar";
import { Tag } from "~/components/ScrollHorizontal";
import { Footer } from "../home";
import { useEffect } from "react";

export default function flink() {
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
      <section className="max-w-7xl mx-auto  w-[90%] md:w-ful  pt-4 md:pt-16  pb-20">
        <div className="w-full bg-[url('/projects/flink/back.png')] h-[280px] md:h-[420px] lg:h-[680px] overflow-hidden rounded-[40px]  bg-cover">
          <img
            alt="cover"
            className=" w-full object-cover  h-full mx-auto "
            src="/projects/flink/img12.webp"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-12 mt-16 md:mt-28 ">
          <div className="w-full md:w-[30%] relative">
            <Link to="/projects/">
              <p className="uppercase text-dark text-xs absolute -top-10">
                <span className="text-dark hover:text-flink font-bold">
                  {" "}
                  Projects{" "}
                </span>{" "}
                ⇢ <span className="text-dark"> Flink</span>
              </p>
            </Link>
            <a
              href="https://miflink.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="logo"
                className="w-[120px] md:w-[140px] hover:scale-90 transition-all"
                src="/projects/flink/Flink.png"
              />
            </a>
            <div className="flex flex-wrap gap-3 mt-6">
              <Tag variant="outline" label="Product Design" />
              <Tag variant="outline" label="App" />
              <Tag variant="outline" label="Fintech" />
              <Tag variant="outline" label="Figma" />
            </div>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Date
            </p>
            <p className="text-base text-iron-500 text-black ">
              November 2022 - July 2023
            </p>
            <p className="text-black font-title font-bold text-xl mt-10 mb-1">
              Role
            </p>
            <p className="text-base text-iron-500 text-black ">
              Product Designer
            </p>
          </div>
          <div className="w-full md:w-[70%]">
            <p className="text-xl md:text-2xl text-black ">
              Flink is a{" "}
              <span className="text-flink  font-bold">Fintech Startup</span>{" "}
              that seeks to{" "}
              <span className="text-flink font-bold">
                {" "}
                democratize stock investments.{" "}
              </span>
              The app allows users to invest in shares listed on the New York
              Stock Exchange (NYSE) and the Nasdaq with as little as 30 MXN.
              Users can later sell their shares for a profit or earn dividends.
              Additionally, Flink offers low-risk investment products and a
              savings account with daily returns.
            </p>

            <p className="text-xl md:text-2xl text-black mt-6">
              When I joined the company, the app was in the official store but
              was experiencing three challeges:{" "}
              <span className="text-flink font-bold">
                The volume of daily transactions wasn´t increasing enough, the
                users didn’t have the best experience on the app, so they found
                it difficult to make investment decisions,
              </span>{" "}
              and a high percentage of users left before completing the
              onboarding process.
            </p>
            <p className="text-xl md:text-2xl text-black mt-6">
              This case study focuses on addressing the first two challenges.
              The third challenge is excluded due to privacy considerations.
            </p>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Personas
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            We had 4 user personas defined, but to address the two challenges,
            we focused on two. Our user persona represents the 2 types of users
            that don't have extensive knowledge in investments but are risk
            takers.
          </p>
          <div className="flex flex-wrap md:flex-nowrap gap-16 mt-20">
            <div className="w-full md:w-[380px] grow">
              <img
                alt="user persona"
                className="rounded-xl rotate-3 hover:-rotate-3 transition-all"
                src="/projects/flink/user1.webp"
              />
              <p className="text-base text-black mt-8">
                {" "}
                Andrea is our younger user; she is looking for new ways to
                increase his legacy but she is not sure how to do it.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow">
              <img
                alt="user persona"
                className="rounded-xl -rotate-3 hover:rotate-3 transition-all"
                src="/projects/flink/user2.webp"
              />
              <p className="text-base text-black mt-8">
                {" "}
                Bruno is our main user; he is young but his ambitious nature
                leads him to make rash decisions to get what he wants.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Understanding the problem - User needs
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            Flink's mission is to become the favorite investment application and
            the easiest to use. It's important for customers to easily find
            stocks and understand the information needed to make good investment
            decisions. As the catalog and the information continued increasing,
            it became evident that the volume of information overwhelmed users.
            So, the mission of bringing users closer to investments is not being
            fulfilled.
          </p>
          <p className="text-xl md:text-2xl text-black mt-6">
            Based on this assumption, we conducted deep-dive interviews with 14
            participants to understand pain points and areas of opportunity and
            define what actions to take.
          </p>
          <div className=" px-[10%] mt-20">
            <img alt="testing" className="" src="/projects/flink/img1.webp" />
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
              <span className="text-flink font-bold"> • 41% of users</span> use
              their application daily
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-flink font-bold"> • </span>Just under{" "}
              <span className="text-flink font-bold"> 23% </span> invest in
              stocks once per week
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-flink font-bold"> •</span> 50% of users feel
              that having more data
              <span className="text-flink font-bold">
                {" "}
                helps them make better decisions
              </span>
            </li>
            <li className="text-xl md:text-2xl text-black mt-6">
              {" "}
              <span className="text-flink font-bold">
                {" "}
                • 28% of users{" "}
              </span>{" "}
              want financial education
            </li>
          </ul>
          <div className="flex justify-around mt-20 flex-wrap lg:flex-nowrap">
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/flink/comment1.webp"
            />
            <img
              alt="user comment"
              className="h-auto w-full md:w-auto md:h-36 object-cover"
              src="/projects/flink/comment2.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black">
            Plan of Action
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            With all of the above in mind, the challenges and objectives were
            adjusted to solve both the needs of the user and the business, so
            the design and product teams paired up to to discuss ideas and
            proposals to solve our challenges and evaluating our ideas,
            considering technical constraints, and aligning on the kind of user
            experience we wanted to deliver, we agreed on prioritize two
            features:
          </p>
          <div className="flex  justify-center">
            <img
              alt="challenges diagram"
              className="w-full lg:w-[80%] mt-16 rounded-2xl"
              src="/projects/flink/img11.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Ideation & Prototyping
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap gap-16 mt-12">
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="sketching"
                className="rounded-2xl h-[200px] w-full object-cover border border-dark/10"
                src="/projects/flink/img5.webp"
              />
              <h3 className="text-black text-xl mt-6 font-title">
                A sketching session
              </h3>
              <p className="text-xl text-black mt-2">
                We used this session to explore different design proposals and
                conduct a deeper analysis of the best ideas to choose one to
                take forward into further exploration.
              </p>
            </div>

            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="prototype"
                className="rounded-2xl h-[200px] object-cover w-full border border-white/10"
                src="/projects/flink/img7.webp"
              />
              <h3 className="text-black text-xl mt-6 font-title">
                Prototyping and testing
              </h3>
              <p className="text-xl text-black mt-2">
                {" "}
                We worked on low-fidelity wireframes based on the most
                highly-rated idea; then, we did usability tests with 6 users to
                test our hypothesis and our design.
              </p>
            </div>
            <div className="w-full md:w-[380px] grow hover:-translate-y-4 transition-all">
              <img
                alt="wireframes"
                className="rounded-2xl h-[200px] object-cover w-full"
                src="/projects/flink/img6.webp"
              />
              <h3 className="text-black text-xl mt-6 font-title">
                High fidelity Wireframes
              </h3>
              <p className="text-xl text-black mt-2">
                {" "}
                After analyzing the results, we moved on to high-fidelity
                wireframes using our Design System: Enchiridion.
              </p>
            </div>
          </div>
          <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />

          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Design
          </h2>
          <p className="  text-black text-xl mt-10">
            {" "}
            The first proposal to help users make better investment decisions
            was a small but complex section in the stock detail view. In this
            section we suggested actions to take, based on expert opinion
            accompanied by analysis and related graphs. This strategy helped
            users and, at the same time, it helps increase the number of daily
            transactions.
          </p>
          <div className="flex justify-center mt-20">
            <img
              alt="screens"
              className="w-full md:w-[80%]"
              src="/projects/flink/img8.webp"
            />
          </div>
          <p className="  text-black text-xl mt-20">
            {" "}
            The second proposal focused on increasing the buying and selling of
            shares without impacking the user experience. This proposal offers
            users the option to create combos of stocks, which can be shared by
            expert users and purchased by others.
          </p>
          <div className="flex justify-center mt-20">
            <img
              alt="screens"
              className="w-full md:w-[80%]"
              src="/projects/flink/img10.webp"
            />
          </div>
        </div>
        <hr className="h-[1px] border-[.5px] w-full border-black/10 my-12 md:my-28" />
        <div>
          <h2 className="text-3xl md:text-4xl font-title font-bold text-black ">
            Measuring Success & Next steps
          </h2>
          <p className="text-xl md:text-2xl text-black mt-6">
            The next steps are to track the average daily purchases and sales
            and the average per purchase-sale ticket. In addition to survey
            users to find out more about their experience on the "Analysts
            recommend" section and its usefulness in their investment
            decision-making.
          </p>
          <img
            alt="fur"
            className="w-20 mt-10"
            src="/projects/flink/img9.webp"
          />
        </div>
      </section>
      <Footer variant="small" />
    </main>
  );
}
