import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const FlyingToSF: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Flying to San Francisco — Ivoine Strachan</title>
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">March 1, 2023</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Flying to San Francisco</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p>
          I flew to San Francisco with the hope of getting an internship and meeting
          wonderful new people and building cool projects. I was able to get a referral at Google.
        </p>
        <div className="space-y-4 mt-6">
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059653/IMG_7261_rbog4t.jpg"
            alt="SF 1"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059664/IMG_7266_eyprve.jpg"
            alt="SF 2"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059658/IMG_7259_idd6tr.jpg"
            alt="SF 3"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1697119217/IMG_3306_from_Hack_Club_via_Slack_ui6irr.jpg"
            alt="SF 4"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FlyingToSF;
