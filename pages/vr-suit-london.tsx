import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const VRSuitLondon: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-10 mt-10 mb-20">
      <Head>
        <title>Building a VR Suit in London — Ivoine Strachan</title>
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">2025</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-6">Building a VR Suit in London</h1>
      <div className="font-mono text-[17px] leading-relaxed space-y-4 text-gray-800">
        <p className="text-gray-400">still editing...</p>
      </div>
    </div>
  );
};

export default VRSuitLondon;
