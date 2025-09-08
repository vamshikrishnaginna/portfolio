import Image from "next/image";
import Link from "next/link";
import React, { cloneElement, ReactElement } from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineTwitter
} from "react-icons/ai";
import { SiCodersrank, SiLeetcode } from "react-icons/si";
import { FaStackOverflow } from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: ReactElement;
  link: string;
}

interface IntroSectionProps {
  name: string;
  description: string;
  email: string;
  resume: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: <AiOutlineGithub />,
    link: "https://github.com/vamshikrishnaginna"
  },
  // {
  //   name: "StackOverflow",
  //   icon: <FaStackOverflow />,
  //   link: "https://stackoverflow.com/users/11260616/vamshi-krishna"
  // },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/vamshikrishnaginna/"
  },
  {
    name: "Medium",
    icon: <AiOutlineMedium />,
    link: "https://medium.com/@vamshiginna1606"
  },
  // {
  //   name: "Leetcode",
  //   icon: <SiLeetcode />,
  //   link: "https://leetcode.com/u/vamshiginna1606/"
  // },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@vamshikrishnaginna4003"
  },
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/vamshiginna1606"
  }
];

const IntroSection: React.FC<IntroSectionProps> = ({ name, description, email, resume }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <h1 className="text-center text-xl text-white duration-150 sm:text-left sm:text-2xl">
          Hey, I&apos;m{" "}
          <span className="text-4xl font-bold duration-150 sm:text-5xl 2xl:text-6xl">{name}</span>
        </h1>
        <p className="text-sm font-medium text-gray-400 duration-150 sm:text-base">{description}</p>
      </div>
      <div className="flex flex-row justify-center space-x-5 md:justify-start">
        {socialLinks.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            {cloneElement(item.icon, {
              size: 25,
              className: "text-neutral-300 hover:text-white duration-150"
            })}
          </Link>
        ))}
      </div>
      <div className="mt-4 flex flex-col justify-center gap-4 sm:max-w-lg sm:flex-row md:justify-start">
        <Link
          href={`mailto:${email}`}
          className="hover:drop-shadow-cta inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-zinc-600 duration-150 hover:bg-white hover:text-zinc-900 hover:ring-white sm:w-1/3 sm:text-center"
        >
          Email
        </Link>
        <Link
          href={"https://topmate.io/vamshi_krishna_ginna"}
          className="hover:drop-shadow-cta inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-zinc-600 duration-150 hover:bg-white hover:text-zinc-900 hover:ring-white sm:w-1/3 sm:text-center"
        >
          Let’s Talk!
        </Link>

        <Link
          href={resume}
          target="_blank"
          className="hover:drop-shadow-cta inline-block space-x-2 rounded bg-zinc-50 px-4 py-1.5 text-base font-semibold leading-7 text-zinc-800 ring-1 ring-transparent transition-all duration-150 hover:bg-zinc-900/20 hover:text-zinc-100 hover:ring-zinc-600/80 sm:w-1/3 sm:text-center"
        >
          <span>Resume</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-8 px-4 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <div className="mx-auto mt-8 flex max-w-4xl flex-col-reverse items-center justify-center gap-8 sm:-mb-40 sm:mt-0 sm:min-h-screen sm:px-0 md:flex-row lg:gap-16 2xl:gap-20">
          <IntroSection
            name="Vamshi Ginna"
            description="Welcome to my little kingdom on the internet! 👋"
            email="vk.ginna@gmail.com"
            resume="Resume_VamshiGinna.pdf"
          />
          <div className="mb-2">
            <Image
              src="/images/profilePic4.png"
              alt="Picture of Vamshi Krishna Ginna"
              width={300}
              height={450}
            />
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-5xl shadow-md sm:mt-0 ">
          <h2 className="mb-4 text-center text-2xl font-bold text-white duration-150 2xl:text-3xl">
            🛠️ Behind the Code 🧑‍💻
          </h2>
          <div className="mb-4 flex flex-col items-center gap-4 text-sm text-gray-400 duration-150 sm:text-base 2xl:text-lg">
            <p>
              Hello! I&apos;m <b>Vamshi</b>, a passionate AI Software Engineer with a Master’s
              degree in Computer Science from the University of Maryland, Baltimore County (UMBC).
              With over 5 years of experience in software development, machine learning, and
              full-stack engineering, I specialize in creating scalable, innovative solutions that
              bring impactful results.
            </p>

            <p>
              I currently work as a Full Stack Developer at LCG Inc., where I design and deploy
              enterprise-scale AI platforms, multi-modal RAG systems, and conversational AI
              solutions using Azure OpenAI, Semantic Kernel, LangChain, AutoGen, Agno, and agentic
              AI workflows. Previously, I worked as a Software Developer at Ardent Privacy, where I
              led the re-architecture of backend systems, implemented high-performance APIs, and
              developed NLP-powered data discovery systems using Python and LangChain. My expertise
              in technologies like Java, Python, Node.js, React, Spring Boot, and AWS has enabled me
              to deliver production-ready solutions that solve real-world challenges.
            </p>
            <p>
              Throughout my journey, I’ve actively participated in hackathons, workshops, and
              research, winning honors at NASA Space Apps, IBM Hackathons, and Smart India
              Hackathon. I’ve also co-authored research in AI for cybersecurity and energy systems,
              keeping me at the cutting edge of technology.
            </p>
            <p>
              I’m a Microsoft Certified Azure AI Engineer and Azure Data Scientist, passionate about
              leveraging AI and cloud computing to solve complex real-world problems. Outside of
              work, I regularly write technical blogs on Medium, where I share practical guides and
              deep dives into topics like LangChain, LangGraph, RAG applications, Python, and AI
              workflows — helping developers and engineers accelerate their journey into AI and
              cloud development.
            </p>
            <p>
              When I’m not coding, writing, or mentoring, you’ll find me sharing insights on
              LinkedIn and connecting with engineers, students, and innovators. I also use
              <i>
                <a href="https://topmate.io/vamshi_krishna_ginna" target="_blank">
                  Topmate.io
                </a>
              </i>{" "}
              to connect with people, share my insights, and provide valuable advice on software
              development, studying abroad, and career growth. Check out my profile to book a 1:1
              chat or get personalized advice!
            </p>

            <p>🤝 Let&apos;s connect - together, we can drive innovation in the tech industry!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
