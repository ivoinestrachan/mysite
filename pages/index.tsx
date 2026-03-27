import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Google from "../assets/pfp.jpg"
import Merchants from "../assets/merchants.PNG"
import Portfolio from "../components/portfolio";

const Home: NextPage = () => {
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Ivoine Strachan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-5 md:px-16 mt-8 mb-20">
        {/* Header: name left, image right */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="font-mono font-bold text-[24px] mb-1">
              Ivoine Strachan
            </div>
            <div className="flex gap-4 font-mono text-[13px]">
              <a href="https://github.com/ivoinestrachan" className="text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://x.com/ivoinetech" className="text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/in/ivoine/" className="text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <Image
            src={Google}
            alt="ivoine"
            height={90}
            width={90}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Short intro */}
        <p className="font-mono text-[15px] mb-4 text-gray-800">
          hi! i&apos;m ivoine. i&apos;m 21.
        </p>

        {/* About section */}
        <div className="mb-4">
          <div className="inline-block bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1 rounded mb-3">
            about
          </div>
          <p className="font-mono text-[15px] leading-relaxed text-gray-800">
            I&apos;m a high school dropout with an obsession for technology and making a difference.
            Born in The Bahamas, currently based in China. Traveled 2,000 miles to San Francisco,
            and once played in a national CARIFTA chess tournament.
          </p>
        </div>

        {/* Currently building */}
        <div className="mb-4">
          <div className="inline-block bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1 rounded mb-3">
            now
          </div>
          <p className="font-mono text-[15px] leading-relaxed text-gray-800">
            Building financial infrastructure for The Bahamas — a unified payment network designed to
            modernize how money moves across the islands.
          </p>
        </div>

        {/* Merchants image */}
        <div className="mb-4 relative">
          <Image
            src={Merchants}
            alt="merchants"
            width={800}
            height={400}
            className="w-full cursor-zoom-in hover:opacity-90 transition-opacity duration-200"
            style={{ objectFit: "cover", objectPosition: "center 40%", width: "100%", maxHeight: "220px" }}
            onClick={() => setLightbox(true)}
          />
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <div className="max-w-3xl w-full px-4">
              <Image
                src={Merchants}
                alt="merchants full"
                width={1200}
                height={900}
                className="w-full object-contain rounded"
              />
              <a
                href="https://en.wikipedia.org/wiki/Sogdia"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-mono text-xs text-gray-400 hover:text-white mt-3"
                onClick={e => e.stopPropagation()}
              >
                Sogdian merchants — Wikipedia ↗
              </a>
            </div>
          </div>
        )}

        {/* Backed by */}
        <div className="mb-6">
          <div className="inline-block bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1 rounded mb-3">
            backed by
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[14px]">
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">Hack Club</a>
            <a href="https://www.1517fund.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">1517 Fund</a>
            <a href="https://tylercowen.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">Tyler Cowen</a>
            <a href="https://www.prometheusxtalent.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">PrometheusX</a>
            <a href="https://ericschmidt.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">Eric Schmidt</a>
            <a href="https://www.yvonnebajela.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">Yvonne Bajela</a>
            <span className="text-gray-400">+ more</span>
          </div>
        </div>


        {/* Blog Posts Section */}
        <Portfolio />
      </main>
    </div>
  );
};

export default Home;
