import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Donations from "../components/donation";

const sponsor = () => {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('https://bank.hackclub.com/api/v3/organizations/ivoine/donations')
      .then(response => response.json())
      .then(data => {
        const lastTwoDonations = data.slice(0, 2); 
        setDonations(lastTwoDonations);
      })
      .catch(error => console.error('Error fetching donations:', error));
  }, []);

  
  const [data, setData] = useState({
    intro:
      "Hello everyone, I'm Ivoine! I have some great news and a favor to ask of you.",
    secintro:
      "I'm an 18-year-old from the Bahamas, where life has been quite an adventure. Raised by my\ngrandmother, I discovered my passion for chess and technology early on, competing in chess\ntournaments in Jamaica and the Bahamas, and exploring game development on Roblox.\nDespite losing my mother at 16 and starting my coding journey on a smartphone, I've never\ngiven up on my dream to create and build amazing projects.",

    image: [
      "https://res.cloudinary.com/dxmrcocqb/image/upload/v1701898310/Deet_IMG_1289_xo1vaq.jpg",
      "https://res.cloudinary.com/dxmrcocqb/image/upload/v1701898453/Ivoine_journey_image_cwqbe8.png",
    ],
    support: "I have an incredible opportunity to be part of Buildspace but I need some help getting there. I had a tough upbringing\nin The Bahamas and this opportunity could change my life. Here's a breakdown of what I'm facing:",
    flight: "Plane ticket: $700 - $800",
    rent: "Rent and security deposit: $850/month, security deposit $1,050",
    expenses:
      "Monthly expenses: Including bus/train fares, phone bills ($50/month), and groceries",

    help: "Your support can make a huge difference! Here's how you can contribute:",
    //  donate: "Donations: Every contribution helps, no matter the size. Plus, I’ve partnered with Hack Club a\n501(c)(3) non-profit, making your donations tax-deductible.",
    mono: "Non-Monetary Support: If you prefer, you can also help by donating airline points for the flight, or gift cards for U.S. grocery stores or transit.",
    promise:
      "I will make the most of this opportunity. You can follow my journey and check out my projects on my",
    thanks:
      "Your support means the world to me. It's not just about financial assistance; it's about believing\nin someone's dream and being a part of their journey. Thank you for considering my request and\nfor any support you can offer.",
  });
  return (
    <div className="overflow-y-auto h-[100vh]">
      <Link href="/">
        <button className="flex items-center justify-between sm:mx-10 mt-5 font-mono font-bold text-[22px] hover:bg-gray-200 pl-7 pr-7 rounded-md">
          Home
        </button>
      </Link>

      <div className="space-y-4  sm:px-[220px] px-4 mt-10 text-[16px]">
        <div>{data.intro}</div>
        <div>{data.secintro}</div>

        <div>
          Recently, I was accepted into{" "}
          <a
            href="https://buildspace.so/sf2"
            className="text-blue-500 underline"
          >
            Buildspace
          </a>
          , a 4-month program where I can build more tech projects, like
          developing my game called{" "}
          <a href="https://sinerider.com" className="text-blue-500 underline">
            Sinerider
          </a>{" "}
          and turning a dryer into a cotton candy machine! This program is a
          stepping stone towards a brighter future in tech - and many have told
          me that proving myself here could open doors to exciting job
          opportunities.
        </div>
        <div>
        <div className="flex items-center gap-4 flex-wrap  sm:justify-start justify-center mt-2">
          {data.image.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`image-${index}`}
              width={350}
              height={250}
            />
          ))}
          </div>
            <div>
              <Donations donations={donations} />
            </div>
        </div>
        <div>
          <div className="font-bold">Why I Need Your Support:</div>
          {data.support}
        </div>

        <div>
          <ul>
            <li>{data.flight}</li>
            <li>{data.rent}</li>
            <li>{data.expenses}</li>
          </ul>
        </div>
        <div className="font-bold">How You Can Help:</div>
        <div>{data.help}</div>
        <div>
          Donations: Every contribution helps, no matter the size. Plus, I’ve
          partnered with{" "}
          <a href="https://hackclub.com" className="text-blue-500 underline">
            Hack Club
          </a>{" "}
          a 501(c)(3) non-profit, making your donations <span className="font-bold">tax-deductible</span>{" "}
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
