import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Google from "../public/assets/pfp.jpeg";
import Portfolio from "../components/portfolio";

const Home: NextPage = () => {
 

  return (
    <div className="sm:flex">
      <div>
    <div className="sm:w-[700px]">
      <Head>
        <title>Ivoine Strachan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center justify-center m-auto w-[100%] md:px-10 px-5 mt-10">
        <Image
          src={Google}
          alt="ivoine"
          height={80}
          width={150}
          className="cover rounded-full mb-[16px] ml-auto mr-auto md:m-0"
        />
        <div className="font-mono font-extrabold text-[36px]">
          Ivoine Strachan
        </div>

        <div className="flex gap-3 font-mono text-[18px] items-center">
          <a href="https://github.com/ivoinestrachan">
            <p className="underline">Github</p>
          </a>
          <span>~</span>
          <a href="https://scrapbook.hackclub.com/sike">
            <p className="underline">Scrapbook</p>
          </a>
          <span>~</span>
          <a href="https://www.instagram.com/ivoinetech/">
            <p className="underline">Instagram</p>
          </a>
        </div>
        <div className="font-mono mt-5 text-lg">About Me</div>

        <div className="font-mono mt-5 sm:hover:bg-gray-100 sm:py-2 sm:pr-3 sm:pl-3 rounded-md cursor-pointer">
          I am a high school dropout with a passion for technology and making a
          difference.I am currently working on{" "}
          <span className="underline">
            <a href="https://sinerider.com/">Sinerider</a>
          </span>{" "}
           an {}
          <span className="underline">
            <a href="https://github.com/hackclub/sinerider">open-source</a>
          </span>{" "}
          game about love and graphing I am committed to learning
          and growing, and I believe that education is not limited to the
          classroom. Join me on this journey and let's build a better future
          together.
        </div>

        <div className="mt-5 font-mono text-lg">
          <div>
           Interesting facts about me
          </div>
          <div>
            <li>18 years old</li>
            <li>I live in The Bahamas</li>
            <li>built a bomb at a hackathon</li>
            <li>Travel 2,000 miles to San Francisco for 4months</li>
            <li>played in a national CARIFTA chess tournament</li>
          </div>
        </div>
      </main>
     </div>
      </div>
      <div >
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
