import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/profile.png";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Ashfaq Nisar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={"min-h-screen bg-draculaPrimaryBG"}>
          <div className="md:container md:mx-auto">
            <div className="h-screen flex flex-col-reverse sm:flex-row text-center sm:text-left items-center justify-evenly">
              <div>
                <h1 className="text-3xl text-white">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm{" "}
                  <span className={"text-6xl text-buffy font-bold"}>
                    Ashfaq Nisar{" "}
                  </span>
                </h1>
                <p className="mt-3 text-xl text-gray-200 font-medium">
                  Hi, You can find me in a corner doing my own thing.
                </p>
                <p className={"mt-3 text-white"}>ashfaqnisar00@gmail.com</p>
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
