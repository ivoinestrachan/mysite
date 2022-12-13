import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Google from "../public/assets/google.jpg";

const Home: NextPage = () => {
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
          className="cover rounded-[8px] mb-[16px] ml-auto mr-auto md:m-0"
        />
        <div className="font-mono font-extrabold text-[36px]">
          Ivoine Strachan
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
          difference. I am currently working on <span className="underline"><a href="https://hackclub.com/bank/">HackClub Bank</a></span> App, an {}
          <span className="underline">
            <a href="https://github.com/hackclub/bankapp">open-source</a>
          </span>{" "}
          project that aims to democratize finance and empower young people to
          take control of their financial futures. I am committed to learning
          and growing, and I believe that education is not limited to the
          classroom. Join me on this journey and let's build a better future
          together.
        </div>
      </main>
    </div>
  );
};

export default Home;
