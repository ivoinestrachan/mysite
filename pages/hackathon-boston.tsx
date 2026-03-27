import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const HackathonBoston: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Hackathon in Boston — Ivoine Strachan</title>
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">2024</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Hackathon in Boston</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p>Explored Boston and built a robotic arm.</p>
        <div className="space-y-4 mt-6">
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717355546/Alexa_IMG_8200_u96t9f.webp"
            alt="Boston Hackathon 1"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717356188/5ae3defc-c1c9-4272-a0a5-387decf8dade.png"
            alt="Boston Hackathon 2"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HackathonBoston;
