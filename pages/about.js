import React from "react";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Ashfaq Nisar - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={" bg-black mt-20 md:mt-0"}>
        <div className={"max-w-7xl mx-auto px-4 sm:px-6"}>
          {/*Todo: Add a back button*/}
          <div className={"py-5 md:py-6"}>
            <div className={"flex flex-row gap-2 items-center  "}>
              <h2
                className={"text-2xl sm:text-2xl text-medium text-white inline"}
              >
                You can call me{" "}
              </h2>
              <h1 className={"text-4xl inline text-dracula-purple font-bold"}>
                Ash
              </h1>
              <Image
                src={"/images/dracula.svg"}
                width={40}
                height={40}
                alt={"dracula"}
              />
            </div>

            <p className={"text-base sm:text-lg font-medium"}>
              Just a typical techie guy who loves to take <b>Risks</b> and{" "}
              <b>Develop Software&apos;s</b>. Hustler for life!✊
            </p>
          </div>

          <div className={"pb-4 md:pb-6 "}>
            <h3 className={"font-bold sm:text-lg mb-2"}>
              ‍💻 Technologies & Tools, I love working with:
            </h3>
            <div className={"flex flex-row flex-wrap gap-2 items-center"}>
              <img
                alt="React"
                src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
              />
              <img
                alt="Redux"
                src="https://img.shields.io/badge/-Redux-764abc?style=flat-square&logo=redux&logoColor=white"
              />
              <img
                alt="ESLINT"
                src="https://img.shields.io/badge/-ESLint-4930bd?style=flat-square&logo=eslint&logoColor=white"
              />
              <img
                alt="Prettier"
                src="https://img.shields.io/badge/-Prettier-1e2b33?style=flat-square&logo=prettier&logoColor=white"
              />
              <img
                alt="html5"
                src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
              />
              <img
                alt="css3"
                src="https://img.shields.io/badge/-CSS3-2965f1?style=flat-square&logo=css3&logoColor=white"
              />
              <img
                alt="Tailwind"
                src="https://img.shields.io/badge/-Tailwind CSS-07b6d5?style=flat-square&logo=tailwind-css&logoColor=white"
              />
              <img
                alt="Bootstrap"
                src="https://img.shields.io/badge/-Bootstrap-563d7c?style=flat-square&logo=bootstrap&logoColor=white"
              />
              <img
                alt="SCSS"
                src="https://img.shields.io/badge/-SCSS-CC6699?style=flat-square&logo=sass&logoColor=white"
              />
              <img
                alt="js"
                src="https://img.shields.io/badge/-JavaScript-F7B93E?style=flat-square&logo=javascript&logoColor=white"
              />
              <img
                alt="Nodejs"
                src="https://img.shields.io/badge/-Node JS-43853d?style=flat-square&logo=Node.js&logoColor=white"
              />
              <img
                alt="Express"
                src="https://img.shields.io/badge/-Express JS-323330?style=flat-square&logo=express&logoColor=white"
              />
              <img
                alt="Apollo"
                src="https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql&logoColor=white"
              />
              <img
                alt="MongoDB"
                src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white"
              />
              <img
                alt="Firebase"
                src="https://img.shields.io/badge/-Firebase-f5820d?style=flat-square&logo=firebase&logoColor=white"
              />
              <img
                alt="Docker"
                src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white"
              />
              <img
                alt="Vercel"
                src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"
              />
              <img
                alt="Heroku"
                src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white"
              />
              <img
                alt="github actions"
                src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"
              />
              <img
                alt="Google Cloud Platform"
                src="https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white"
              />
              <img
                alt="AWS"
                src="https://img.shields.io/badge/-AWS-ff9900?style=flat-square&logo=amazon-aws&logoColor=white"
              />
              <img
                alt="git"
                src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
              />
              <img
                alt="npm"
                src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white"
              />
              <img
                alt="yarn"
                src="https://img.shields.io/badge/-YARN-2e8dba?style=flat-square&logo=yarn&logoColor=white"
              />
              <img
                alt="intellij"
                src="https://img.shields.io/badge/-Intellij-000000?style=flat-square&logo=intellij-idea&logoColor=white"
              />
              <img
                alt="vscode"
                src="https://img.shields.io/badge/-VS Code-198bd3?style=flat-square&logo=visual-studio-code&logoColor=white"
              />
              <img
                alt="sentry"
                src="https://img.shields.io/badge/-Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
