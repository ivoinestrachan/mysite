import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const SleepingInTheAirport: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Sleeping in the Airport — Ivoine Strachan</title>
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">Dec 31, 2023</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Sleeping in the Airport</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p>
          Moving to San Francisco for the year. Moving into my apartment with three
          random people I had never met. It started with sleeping in the airport.
        </p>
        <div className="space-y-4 mt-6">
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717354310/Photo_Jan_2_2024_cys0ac.jpg"
            alt="Airport 1"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717354657/IMG_8095_vqreyj.webp"
            alt="Airport 2"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
          <Image
            src="https://res.cloudinary.com/dxmrcocqb/image/upload/v1717425543/A3C85B2C-0BEB-4880-9BAC-7AA6831F29A6_ukffh4.jpg"
            alt="Airport 3"
            width={600}
            height={400}
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SleepingInTheAirport;
