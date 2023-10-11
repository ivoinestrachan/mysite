import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Google from "../public/assets/pfp.jpeg";

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => setTime(new Date()), 1000);

  const currentTime = new Date();

  const hour = currentTime.getHours();

  let message;

  if (hour >= 5 && hour < 12) {
    message = "Im awake at";
  } else if (hour >= 12 && hour < 23) {
    message = "Im coding now at";
  } else {
    message = "Sleeping right now";
  }

  return (
    <div className="flex min-h-[700px] flex-col items-center justify-center  max-w-[1024px] md:px-20 m-auto ">
      <Head>
        <title>Ivoine Strachan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="items-center justify-center m-auto w-[100%] md:px-20 px-5">
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

        <div className="font-mono font mb-2">
          {message} {time.toLocaleTimeString()} EST
        </div>

        <div className="flex gap-3 font-mono text-[18px] items-center">
          <a href="https://github.com/ivoinestrachan">
            <p className="underline">Github</p>
          </a>
          <span>~</span>
          <a href="https://scrapbook.hackclub.com/sikebot">
            <p className="underline">Scrapbook</p>
          </a>
          <span>~</span>
          <a href="https://www.instagram.com/ivoinetech/">
            <p className="underline">Instagram</p>
          </a>
        </div>

        <div className="font-mono mt-5">
          I am a high school dropout with a passion for technology and making a
          difference. I am currently working on{" "}
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
      </main>
    </div>
  );
};

export default Home;
