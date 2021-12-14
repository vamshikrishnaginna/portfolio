import React from "react";
import Head from "next/head";

const Projects = () => {
  const sampleProjects = [
    {
      id: "esocr",
      title: "Exact Sciences OCR",
      description:
        "Built an OCR Solution for Exact Sciences to automating the patients data directly into the system rather than manual input.",
      github: "https://github.com/ashfaqnisar/ESOCR",
      technologies: ["react", "nodejs", "nanonets"],
    },
    {
      id: "return_order_system",
      title: "Return Order Management System",
      description:
        "Built an Return Order System to return the defective or damaged goods back to the seller. Developed the application using various microservices.",
      github: "https://github.com/ashfaqnisar/Return-Order-Management-System",
      technologies: ["java", "maven", "SpringBoot", "thymeleaf"],
    },
    {
      id: "adani",
      title: "Adani Ports Invoicing System",
      description:
        "Built the invoicing system, to deal with invoices, payments, settlements and managing money in the wallets for Adani Ports during Hackathon",
      technologies: ["react", "firestore", "express", "razorpay"],
    },
    {
      id: "college_erp",
      title: "College ERP",
      description:
        "Developed an ERP for the college to maintain all the info about the students, staff and fees.Also built the arrangement of the students for examinations.",
      technologies: ["react", "firestore", "firebase Functions", "express js"],
    },
    {
      id: "dsc_vjit",
      title: "DSC VJIT Community Site",
      description:
        "Built an dynamic website for the DSC VJIT college club. Integrated the site to Open Source Aura Community Dashboard. ",
      github: "https://github.com/ashfaqnisar/dsc-vjit-website",
      technologies: ["next JS", "firestore", "firebase Functions", "vue JS"],
    },
    {
      id: "kiosk",
      title: "KIOSK Wastage Recycler",
      description:
        "Developed an java project to manage the various types of wastage provided to the KIOSK. Built an command line user interface for the user to interact with.",
      github: "https://github.com/ashfaqnisar/Return-Order-Management-System",
      technologies: ["java", "maven"],
    },
    {
      id: "enimo",
      title: "Enimo",
      description:
        "Developed the app for managing & monitoring the amount of energy consumed by the appliances.",
      github: "https://github.com/ashfaqnisar/enimo",
      technologies: ["react", "firestore", "pyrebase"],
    },
    {
      id: "mars_habitat",
      title: "Mars Habitat Environment",
      description:
        "Built a Game Environment to explore the colonization of Mars.",
      technologies: ["UnRealEngine"],
    },
  ];
  return (
    <>
      <Head>
        <title>Ashfaq Nisar - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex bg-black mt-20 md:mt-0"}>
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
                <div
                  key={project.id}
                  className={"py-5 px-4 border border-white rounded-md"}
                >
                  <h3 className={"text-xl text-white font-medium"}>
                    {project.title}
                  </h3>
                  <h5 className={"text-gray-300 "}>{project.description}</h5>
                  <div className={"pt-2 block"}>
                    {project.technologies.map((technology, index) => {
                      return (
                        <p
                          key={technology}
                          className={"capitalize"}
                          style={{ display: "inline" }}
                        >
                          {technology}
                          {project.technologies.length !== index + 1 && (
                            <>&ensp;|&ensp;</>
                          )}
                        </p>
                      );
                    })}
                  </div>
                  {project.github && (
                    <div className={"pt-2"}>
                      <a
                        key={project.id}
                        href={project.github}
                        target={"_blank"}
                        rel="noreferrer"
                        className={
                          "font-bold border-b-2 border-black hover:border-dracula-green-main text-dracula-green-main transition duration-500  origin-center ease-in-out hover:-translate-y-1"
                        }
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
