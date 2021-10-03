import React from "react";
import Head from "next/head";
import Image from "next/image";
import { shimmer, toBase64 } from "../shared/base";

const Gallery = () => {
  const events = [
    {
      image: "https://picsum.photos/id/1015/400/400",
      title: "Event 1",
      description:
        "The astronaut malfunctions voyage like an intelligent teleporter.",
    },
    {
      image: "https://picsum.photos/id/1018/400/400",
      title: "Event 2",
      description:
        "The astronaut malfunctions voyage like an intelligent teleporter.",
    },
    {
      image: "https://picsum.photos/id/1022/400/400",
      title: "Event 3",
      description:
        "The astronaut malfunctions voyage like an intelligent teleporter.",
    },
    {
      image: "https://picsum.photos/id/1002/400/400",
      title: "Event 4",
      description:
        "The astronaut malfunctions voyage like an intelligent teleporter.",
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
                      "h-80 lg:h-96 filter saturate-50 hover:saturate-[1.25] transition duration-500  origin-center ease-in-out transform hover:-translate-y-1 hover:scale-80"
                    }
                    style={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={event.image}
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
