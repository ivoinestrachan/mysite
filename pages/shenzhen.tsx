import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import img1 from "../assets/IMG_3871.jpg";
import img2 from "../assets/IMG_3872.jpg";
import img3 from "../assets/photo-3509_singular_display_fullPicture.jpg";
import img4 from "../assets/IMG_3249.jpg";
import img5 from "../assets/bf2555b688a636e5aedbcd8e63f99283.jpg";
import img6 from "../assets/69EA0E58-D3FE-4401-938B-9C438DAB3BEF.jpg";

const Shenzhen: NextPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 md:px-16 mt-10 mb-20">
      <Head>
        <title>Shenzhen, China — Ivoine Strachan</title>
      </Head>
      <Link href="/" className="font-mono text-gray-400 hover:text-gray-600 text-sm mb-8 block">
        ← back
      </Link>
      <p className="text-gray-400 font-mono text-sm mb-2">2026</p>
      <h1 className="font-mono font-extrabold text-[32px] mb-4">Shenzhen, China</h1>

      <p className="font-mono text-[15px] leading-relaxed text-gray-800 mb-3">
        I&apos;ve been here for the past 4 months building robots and meeting people.
      </p>

      <p className="font-mono text-[18px] text-gray-400 mb-1">千里之行，始于足下</p>
      <p className="font-mono text-[12px] text-gray-400 mb-8">
        &ldquo;A journey of a thousand miles begins with a single step.&rdquo;
      </p>

      {/* Row 1: two equal columns */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <Image src={img1} alt="Shenzhen 1" width={600} height={600} className="w-full h-64 object-cover" />
        <Image src={img2} alt="Shenzhen 2" width={600} height={600} className="w-full h-64 object-cover" />
      </div>

      {/* Row 2: full width */}
      <div className="mb-2">
        <Image src={img3} alt="Shenzhen 3" width={1200} height={500} className="w-full h-64 object-cover" />
      </div>

      {/* Row 3: three equal columns */}
      <div className="grid grid-cols-3 gap-2">
        <Image src={img4} alt="Shenzhen 4" width={400} height={400} className="w-full h-56 object-cover" />
        <Image src={img5} alt="Shenzhen 5" width={400} height={400} className="w-full h-56 object-cover" />
        <Image src={img6} alt="Shenzhen 6" width={400} height={400} className="w-full h-56 object-cover" />
      </div>
    </div>
  );
};

export default Shenzhen;
