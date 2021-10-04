import React from "react";
import Head from "next/head";
import Image from "next/image";
import { shimmer, toBase64 } from "../shared/base";

const Gallery = () => {
  const events = [
    {
      id: "devfest_2019",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633255380/devfest_2019/1.jpg",
      title: "Devfest 2019",
      description:
        "Enjoyed meeting people & learning about various technologies.",
    },
    {
      id: "ibm",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633255380/ibm/1.jpg",
      title: "IBM Hack 2019 Challenge",
      description: "Won the Best UI/UX Award in IBM Hack 2k19.",
    },
    {
      //Change this to sih_2019 later on
      id: "sih1_2019",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633258227/ai_club/1.jpg",
      title: "Smart India Hackathon 2019",
      description: "Runner-Ups for building an Energy Management System.",
    },
    {
      id: "ai_club",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633258227/ai_club/1.jpg",
      title: "AI Club Inauguration",
      description: "Organized & Initiated the AI Club in the college.",
    },
    {
      id: "nasa_2018",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633258227/ai_club/1.jpg",
      title: "Nasa Space Apps Hackathon 2018",
      description: "Won the first place for building an Mars Environment Game.",
    },
    {
      id: "excite",
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633258227/ai_club/1.jpg",
      title: "Excite 2018",
      description: "A 60-Day Workshop on Product Development.",
    },
    {
      id: "smart_city_hackathon",
      images: 4,
      image:
        "https://res.cloudinary.com/dfq0wyslj/image/upload/v1633258227/smart_city_hackathon/1.jpg",
      title: "Smart City Hackathon 2018",
      description: "Won the Best Prototype Award for the application.",
    },
  ];

  return (
    <>
      <Head>
        <title>Ashfaq Nisar - Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex bg-black"}>
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
                      "h-80 lg:h-96 filter grayscale hover:grayscale-0 transition duration-500  origin-center ease-in-out transform hover:-translate-y-1 hover:scale-80"
                    }
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={`https://res.cloudinary.com/dfq0wyslj/image/upload/${event.id}/1.jpg`}
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
