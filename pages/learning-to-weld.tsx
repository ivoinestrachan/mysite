import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const LearningToWeld: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Learnt How to Weld — Ivoine Strachan</title>
        <link rel="canonical" href="https://ivoine.dev/learning-to-weld" />
        <meta name="description" content="During my stay in the Bay Area I learnt how to weld which was pretty cool. I welded a really cool piece together at the end of the day." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">May 25, 2023</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Learnt How to Weld</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p>
          During my stay in the Bay Area I learnt how to weld which was pretty cool.
          I welded a really cool piece together at the end of the day.
        </p>
        <video controls className="w-full rounded-xl mt-6">
          <source
            src="https://res.cloudinary.com/dxmrcocqb/video/upload/v1697065947/4400075460677380078img_8093.MP4_-_Ivoine_Journey_teykpr.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default LearningToWeld;
