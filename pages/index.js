import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/profile.png";

export default function Home() {
  return (
    <>
      {/*<div className=" items-center justify-center min-h-screen py-2 bg-draculaPrimaryBG">*/}
      <Head>
        <title>Ashfaq Nisar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"min-h-screen bg-draculaPrimaryBG"}>
        <div className="md:container md:mx-auto">
          <div className="h-screen flex flex-row items-center justify-evenly">
            <div>
              <h1 className="text-3xl text-white">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm <span className={"text-5xl text-buffy"}>Ashfaq Nisar </span>
              </h1>
              <p className="mt-3 text-xl text-gray-200">
                Hi, You can find me in a corner doing my own thing.
              </p>
            </div>

            <div className="w-72">
              <Image src={profilePicture} alt={"Picture of Ashfaq"} />
            </div>
          </div>
        </div>
      </main>
      {/*</div>*/}
    </>
  );
}
