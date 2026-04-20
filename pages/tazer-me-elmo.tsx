import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const TazerMeElmo: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Tazer Me Elmo — Ivoine Strachan</title>
        <link rel="canonical" href="https://ivoine.dev/tazer-me-elmo" />
        <meta name="description" content="Built this so when my roommates walk near the elmo they would get shocked. It really ended up being funny — nobody expected it." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">2024</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Tazer Me Elmo</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p>
          Built this so when my roommates walk near the elmo they would get shocked.
          It really ended up being funny — nobody expected it.
        </p>
        <Image
          src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717421217/Photo_Jan_19_2024_niucsj.jpg"
          alt="Tazer Me Elmo"
          width={600}
          height={400}
          className="rounded-xl w-full object-cover mt-6"
        />
      </div>
    </div>
  );
};

export default TazerMeElmo;
