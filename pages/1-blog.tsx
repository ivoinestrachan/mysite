import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Blog1: NextPage = () => {
  useEffect(() => {
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto sm:px-6 px-4">
      <Head>
        <title>gettingkicked out</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="gettingkicked out" />
      </Head>

      <div className="mt-[130px] mb-20">
        <Link
          href="/"
          className="font-mono text-[13px] text-gray-500 hover:text-gray-800"
        >
          ← back
        </Link>

        <h1 className="font-bold sm:text-[32px] text-[24px] mt-6">
          gettingkicked out
        </h1>

        <div className="mt-8 leading-relaxed text-gray-800 space-y-4 text-[17px]">
          <p>
            Got kicked out the house because someone much more important than me.
          </p>
          <p>
            So later i had to reach out to everyone in my contacts. Only one
            person replied, which was Andy. He said he will get me a place for
            tonight.
          </p>
          <p>
            Got to the hotel, met this guy named William who's the reception
            that night.
          </p>
          <p>Next day met up with Andy.</p>
          <p>
            Met another really cool guy called Leon who is a quant and wants to
            invest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
