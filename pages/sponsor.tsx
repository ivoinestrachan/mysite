import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Donations from "../components/donation";
import Head from "next/head";
import useSound from "use-sound";
const sponsor = () => {
  const [donations, setDonations] = useState([]);

  const [play, { stop }] = useSound("/assets/hoho.mp3");

  const toggleAudio = () => {
    play();
  };

  useEffect(() => {
    fetch("https://bank.hackclub.com/api/v3/organizations/ivoine/donations")
      .then((response) => response.json())
      .then((data) => {
        const lastThreeDonations = data.slice(0, 3);
        setDonations(lastThreeDonations);
      })
      .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  const donateRef = useRef<HTMLDivElement>(null);

  const scrollToDonate = () => {
    if (donateRef.current) {
      donateRef.current.scrollIntoView({ behavior: "smooth" });

      donateRef.current.classList.add("highlight");

      setTimeout(() => {
        if (donateRef.current) {
          donateRef.current.classList.remove("highlight");
        }
      }, 3000);
    }
  };

  const [data, setData] = useState({
    intro:
      "Hello everyone, I'm Ivoine! I have some great news and a favor to ask of you.",
    //  secintro:
    //   "I'm an 18-year-old from the Bahamas, where life has been quite an adventure. Raised by my\ngrandmother, I discovered my passion for chess and technology early on by competing in chess\ntournaments in Jamaica and the Bahamas, and exploring game development on Roblox.\nDespite losing my mother at 16 and learning to code using nothing but my smartphone, I've never\ngiven up on my dream to create and build amazing projects.",

    images: [
      {
        url: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1701898310/Deet_IMG_1289_xo1vaq.jpg",
        label: "Me @ Buildspace S4 graduation day",
      },
      {
        url: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1701898453/Ivoine_journey_image_cwqbe8.png",
        label: "Me @ MIT going to a hackathon in vermont",
      },
    ],

    support:
      "I have an incredible opportunity to be part of Buildspace but I need some help getting there. I had a tough upbringing\nin The Bahamas and this opportunity could change my life. For me to participate in Buildspace, I'll need to spend:",
    flight: "Plane ticket: $700 - $800",
    rent: "Rent and security deposit: $850/month,",
    expenses:
      "Monthly expenses: Including bus/train fares, phone bills ($50/month), and groceries",

    help: "Your support would make a huge difference! Here's how you can contribute:",
    mono: "In-kind Support: If you prefer, you can also help by donating airline points for the flight, or gift cards for U.S. grocery stores or transit.",
    promise:
      "I will make the most of this opportunity. You can follow my journey and check out my projects on my",
    thanks:
      "Your support means the world to me. It's not just about financial assistance, it's about believing\nin someone's dream and being a part of their journey. Thank you for considering my request and\nfor any support you can offer.",
  });
  return (
    <div className="overflow-y-auto h-[100vh]">
      <Head>
        <title>Sponsor Me!!</title>
      </Head>
      <div className="flex items-center justify-between sm:mx-10 mt-5 w-[95%]">
        <div>
          <Link href="/">
            <button className="font-mono font-bold text-[22px] hover:bg-gray-200 pl-7 pr-7 rounded-md">
              Home
            </button>
          </Link>
        </div>

        <div>
          <a
            href="#donate"
            className="bg-green-500 py-2.5 pl-7 pr-7 rounded-md text-white"
          >
            <button onClick={scrollToDonate}>Donate</button>
          </a>
        </div>
      </div>

      <div className="space-y-4  sm:px-[220px] px-4 mt-10 text-[16px]">
        <div className="font-bold text-[24px]">
          A{" "}
          <span
            className="border-b-2 border-dotted border-black"
            data-tooltip="take a chance on me"
          >
            Chance
          </span>{" "}
          is Something you Take. An Opportunity Something You Get
        </div>
        <div>{data.intro}</div>
        <div>
          I'm an 18-year-old from the Bahamas, where life has been quite an
          adventure. Raised by my grandmother, I discovered my obsession for chess
          and technology early on by{" "}
          <a
            href="http://www.bahamaschessfederation.org/carifta-2017.html"
            className="text-blue-500 underline"
          >
            competing in chess tournaments in Jamaica
          </a>{" "}
          and the Bahamas, and exploring{" "}
          <a
            href="https://www.youtube.com/watch?v=zVa_q7CwKRg"
            className="text-blue-500 underline"
          >
            game development
          </a>{" "}
          on Roblox. Despite losing my mother at 16 and learning to code using
          nothing but my{" "}
          <a
            href="https://www.youtube.com/watch?v=6iqCR_ndnVk"
            className="text-blue-500 underline"
          >
            smartphone
          </a>
          , I've never given up on my dream to create and build amazing
          projects. Growing up without electricity, Wi-Fi, and running water, I faced significant disadvantages, yet these challenges only fueled my determination to succeed against all odds.
        </div>

        <div>
          Recently, I was accepted into{" "}
          <a href="https://buildspace.so/" className="text-blue-500 underline">
            Buildspace
          </a>
          , a 4-month program where I can build more tech projects, like
          developing my game called{" "}
          <a href="https://sinerider.com" className="text-blue-500 underline">
            Sinerider
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ivoinestrachan/cotton-candy-dryer#readme"
            className="text-blue-500 underline"
          >
            turning a dryer into a cotton candy machine!
          </a>{" "}
          This program is a stepping stone towards a brighter future in tech -
          and many have told me that proving myself here could open doors to
          exciting job opportunities.
        </div>
        <div>
          <div className="flex items-center gap-4 flex-wrap  sm:justify-start justify-center mt-2">
            {data.images.map((image, index) => (
              <div key={index} className="image-container">
                <Image
                  src={image.url}
                  alt={`image-${index}`}
                  width={350}
                  height={250}
                />
                <span>{image.label}</span>
              </div>
            ))}
          </div>
          <div>
            <Donations initialDonations={donations} />
          </div>
        </div>
        <div>
          <div className="font-bold">Why I Need Your Support:</div>
          {data.support}
        </div>

        <div>
          <ul>
            <li className="line-through">{data.flight}</li>
            <li>{data.rent} <span className="line-through">security deposit $950</span></li>
            <li>{data.expenses}</li>
          </ul>
        </div>
        <div className="font-bold">How You Can Help:</div>
        <div>{data.help}</div>
        <div id="donate" ref={donateRef}>
          Donations: Every contribution helps, no matter the size. Plus, I’ve
          partnered with{" "}
          <a href="https://hackclub.com" className="text-blue-500 underline">
            Hack Club
          </a>{" "}
          a 501(c)(3) non-profit, making your donations{" "}
          <span className="font-bold">tax-deductible</span>{" "}
          <a
            href="https://hcb.hackclub.com/donations/start/ivoine"
            className="text-blue-500 underline"
          >
            <span>Donation Link</span>
          </a>
        </div>
        <div>{data.mono}</div>
        <div>
          {data.promise}{" "}
          <a href="https://ivoine.dev" className="text-blue-500 underline">
            Website
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ivoinestrachan"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          .
        </div>
        <div className="pb-5">{data.thanks}</div>
      </div>
    </div>
  );
};

export default sponsor;
