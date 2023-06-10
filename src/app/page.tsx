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
    link: "https://github.com/ashfaqnisar"
  },
  {
    name: "Codersrank",
    icon: <SiCodersrank />,
    link: "https://profile.codersrank.io/user/ashfaqnisar"
  },
  {
    name: "StackOverflow",
    icon: <FaStackOverflow />,
    link: "https://stackoverflow.com/users/10963451/ashfaq-nisar"
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/ashfaqnisar/"
  },
  {
    name: "Medium",
    icon: <AiOutlineMedium />,
    link: "https://ashfaqnisar.medium.com"
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/ashfaqnisar/"
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@ashfaqnisar"
  },
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/ashfaqnisar00"
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
        <p className="text-sm font-medium text-neutral-400 duration-150 sm:text-base">
          {description}
        </p>
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

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-zinc-900 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et convallis nulla, eu
          sagittis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; In hac habitasse platea dictumst. Sed fringilla neque id condimentum
          maximus. Integer id urna sit amet enim condimentum mattis. Proin sed neque vitae est
          eleifend fermentum. Fusce vestibulum mauris a mi rutrum, eu pellentesque tortor consequat.
          Sed commodo faucibus diam, nec pharetra elit. Proin eleifend ipsum auctor risus gravida,
          in lobortis diam aliquet.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-neutral-900 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et convallis nulla, eu
          sagittis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; In hac habitasse platea dictumst. Sed fringilla neque id condimentum
          maximus. Integer id urna sit amet enim condimentum mattis. Proin sed neque vitae est
          eleifend fermentum. Fusce vestibulum mauris a mi rutrum, eu pellentesque tortor consequat.
          Sed commodo faucibus diam, nec pharetra elit. Proin eleifend ipsum auctor risus gravida,
          in lobortis diam aliquet.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-gray-900 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et convallis nulla, eu
          sagittis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; In hac habitasse platea dictumst. Sed fringilla neque id condimentum
          maximus. Integer id urna sit amet enim condimentum mattis. Proin sed neque vitae est
          eleifend fermentum. Fusce vestibulum mauris a mi rutrum, eu pellentesque tortor consequat.
          Sed commodo faucibus diam, nec pharetra elit. Proin eleifend ipsum auctor risus gravida,
          in lobortis diam aliquet.
        </p>
      </div>
      <div className="mx-auto w-full max-w-4xl rounded-lg p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-white">About Me</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et convallis nulla, eu
          sagittis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; In hac habitasse platea dictumst. Sed fringilla neque id condimentum
          maximus. Integer id urna sit amet enim condimentum mattis. Proin sed neque vitae est
          eleifend fermentum. Fusce vestibulum mauris a mi rutrum, eu pellentesque tortor consequat.
          Sed commodo faucibus diam, nec pharetra elit. Proin eleifend ipsum auctor risus gravida,
          in lobortis diam aliquet.
        </p>
      </div>
    </>
  );
};

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-8 px-4 pb-8 md:gap-16 md:pb-16 xl:pb-24">
        <div className="mx-auto mt-8 flex max-w-4xl flex-col-reverse items-center justify-center gap-x-10 gap-y-8 sm:mt-0  sm:min-h-screen sm:px-0 md:flex-row lg:gap-x-16">
          <IntroSection
            name="Ashfaq Nisar"
            description="You can find me in a corner doing my own thing."
            email={"ashfaqnisar00@gmail.com"}
            resume={"Ashfaq_Resume.pdf"}
          />
          <div className="mb-2 duration-150">
            <Image
              src="/images/profile.png"
              alt="Picture of Ashfaq Nisar"
              width={250}
              height={300}
            />
          </div>
        </div>
        <AboutMe />
      </div>
    </>
  );
};

export default Page;
