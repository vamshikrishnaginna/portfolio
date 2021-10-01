import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/profile.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaStackOverflow } from "react-icons/fa";
import { cloneElement } from "react";

const Home = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <HiOutlineMail />,
      link: "mailto:ashfaqnisar00@gmail.com",
    },
    {
      name: "Github",
      icon: <AiOutlineGithub />,
      link: "https://github.com/ashfaqnisar",
    },
    {
      name: "StackOverflow",
      icon: <FaStackOverflow />,
      link: "https://stackoverflow.com/users/10963451/ashfaq-nisar",
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/ashfaqnisar/",
    },
    {
      name: "Twitter",
      icon: <AiOutlineTwitter />,
      link: "https://twitter.com/ashfaqnisar00",
    },
    {
      name: "Instagram",
      icon: <AiOutlineInstagram />,
      link: "https://www.instagram.com/ashfaqnisar/",
    },
  ];
  return (
    <>
      <Head>
        <title>Ashfaq Nisar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex flex-grow bg-black"}>
        <div className="container mx-auto flex flex-col-reverse flex-grow md:flex-row text-center md:text-left justify-center md:justify-evenly items-center ">
          <div className={"flex flex-col space-y-5 "}>
            <h1 className="text-2xl sm:text-3xl text-white">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hey, I'm{" "}
              <span className={"text-4xl sm:text-5xl text-buffy font-bold"}>
                Ashfaq Nisar{" "}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 font-medium">
              You can find me in a corner doing my own thing.
            </p>
            <div
              className={
                "mt-4 flex flex-row justify-center md:justify-start space-x-5"
              }
            >
              {socialLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={"text-white"}>
                    {cloneElement(item.icon, { size: 35 })}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="w-60 md:w-72 mb-2">
            <Image src={profilePicture} alt={"Picture of Ashfaq"} />
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
