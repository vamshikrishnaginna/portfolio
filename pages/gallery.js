import React from "react";
import Head from "next/head";
import Image from "next/image";
import { shimmer, toBase64 } from "../shared/base";

const Gallery = () => {
  const events = [
    {
      id: "vjit_2020",
      title: "VJIT Hackathon 2020",
      description: "Organized & Mentored the hackathon participants.",
    },
    {
      id: "cloud_study_jam_1",
      title: "Cloud Study Jam",
      description: "Conducted a workshop on Google Cloud",
    },
    {
      id: "devfest_2019",
      title: "Devfest 2019",
      description:
        "Enjoyed meeting people & learning about various technical stuff.",
    },
    {
      id: "jetbrains_day_2019",
      title: "Jetbrains Day 2019",
      description: "Loved the whole thing and had a lot of fun at the event!",
    },
    {
      id: "ibm",
      title: "IBM Hack 2019 Challenge",
      description: "Won the Best UI/UX Award in IBM Hack 2019.",
    },
    {
      id: "helping_hands_hackathon",
      title: "Helping Hands Hackathon",
      description: "Participated in this hackathon to support the orphanages",
    },
    {
      id: "sih_2019",
      title: "Smart India Hackathon 2019",
      description: "Runner-Ups for building an Energy Management System.",
    },
    {
      id: "ai_club",
      title: "AI Club Inauguration",
      description: "Initiated and organized the AI Club in the college.",
    },
    {
      id: "workshop_for_freshers",
      title: "Workshop for freshers.",
      description:
        "Conducted the workshop to help out freshers and explain different paths & technologies.",
    },
    {
      id: "nasa_2018",
      title: "Nasa Space Apps Hackathon 2018",
      description: "Won first place for building a Mars-like Environment Game.",
    },
    {
      id: "excite",
      title: "Excite 2018",
      description: "A 60-Day Workshop on Product Development.",
    },
    {
      id: "smart_city_hackathon",
      title: "Smart City Hackathon 2018",
      description: "Won the Best Marketing Award for the application.",
    },
  ];
  const imageTemplate = "https://res.cloudinary.com/dfq0wyslj/image/upload";

  return (
    <>
      <Head>
        <title>Ashfaq Nisar - Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex bg-black mt-20 md:mt-0"}>
        <div className={"container px-4 sm:mx-auto "}>
          {/*Todo: Add a back button*/}
          <div className={"py-5 md:py-6"}>
            <h2 className={"text-2xl sm:text-2xl text-bold text-white"}>
              Gallery
            </h2>
          </div>
          <div
            className={
              "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5"
            }
          >
            {events.map((event) => {
              return (
                <div key={event.title}>
                  <div
                    className={
                      "h-80 md:h-[65] xl:h-[70] filter grayscale hover:grayscale-0 transition duration-500  origin-center ease-in-out transform hover:-translate-y-1 hover:scale-80"
                    }
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={`${imageTemplate}/${event.id}/1.jpg`}
                      alt={`${event.title} Image`}
                      layout={"fill"}
                      className={" rounded-lg"}
                      placeholder={"blur"}
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(400, 400),
                      )}`}
                    />
                    <div
                      className={
                        "py-2 px-3 absolute bottom-0 bg-gradient-to-b from-transparent via-[#00000087] to-[#060606] "
                      }
                      style={{ width: "100%" }}
                    >
                      <h3 className={"text-xl text-white font-medium"}>
                        {event.title}
                      </h3>
                      <h5 className={"text-gray-300"}>{event.description}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
