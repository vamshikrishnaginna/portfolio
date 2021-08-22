import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/profile.png";
import Layout from "../components/layout";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
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
      <Layout>
        <Head>
          <title>Ashfaq Nisar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={"min-h-screen bg-draculaPrimaryBG"}>
          <div className="md:container md:mx-auto">
            <div className="h-screen flex flex-col-reverse md:flex-row text-center md:text-left items-center justify-evenly">
              <div className={"flex flex-col space-y-5 "}>
                <h1 className="text-3xl text-white">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Hey, I'm{" "}
                  <span className={"text-6xl text-buffy font-bold"}>
                    Ashfaq Nisar{" "}
                  </span>
                </h1>
                <p className="text-xl text-gray-200 font-medium">
                  Hi, You can find me in a corner doing my own thing.
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

              <div className="w-72">
                <Image src={profilePicture} alt={"Picture of Ashfaq"} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};
export default Home;
