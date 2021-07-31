import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-draculaPrimaryBG">
      <Head>
        <title>Ashfaq Nisar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl text-white">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm <span className={"text-5xl text-buffy"}>Ashfaq Nisar </span>
        </h1>

        <p className="mt-3 text-xl text-gray-200">
          Greetings, Welcome to the beautiful site!
        </p>
      </main>
    </div>
  );
}
