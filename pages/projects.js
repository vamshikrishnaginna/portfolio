import React from "react";
import Head from "next/head";

const Projects = () => {
  const sampleProjects = [
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
    {
      title: "Project",
      description: "Machine of an evasive procedure, lower the pattern!",
      github: "https://github.com/",
      technologies: ["react"],
    },
  ];
  return (
    <>
      <Head>
        <title>Ashfaq Nisar - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex bg-black"}>
        <div className={"container px-4 sm:mx-auto "}>
          {/*Todo: Add a back button*/}
          <div className={"py-5 md:py-6"}>
            <h2 className={"text-2xl sm:text-2xl text-bold text-white"}>
              Projects
            </h2>
          </div>
          <div
            className={
              "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4"
            }
          >
            {sampleProjects.map((project) => {
              return (
                <a key={project.title} href={project.link}>
                  <div className={"py-5 px-4 border border-white rounded-md"}>
                    <h3 className={"text-xl text-white font-medium"}>
                      {project.title}
                    </h3>
                    <h5 className={"text-gray-300"}>{project.description}</h5>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
