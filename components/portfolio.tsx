import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import shenzhen1 from "../assets/IMG_3871.jpg";
import { PostMeta } from "../lib/posts";

interface Item {
  year: string;
  title: string;
  desc: string;
  href: string;
  external: boolean;
  thumb?: StaticImageData | string;
}

type Tab = "projects" | "writings";

interface PortfolioProps {
  writings?: PostMeta[];
}

const Portfolio = ({ writings = [] }: PortfolioProps) => {
  const [tab, setTab] = useState<Tab>("projects");
  const items: Item[] = [
    {
      year: "2026",
      title: "Shenzhen, China",
      desc: "Spent 4 months building robots and meeting people",
      href: "/shenzhen",
      external: false,
      thumb: shenzhen1,
    },
    {
      year: "2025",
      title: "Slush — London to Helsinki by Caravan",
      desc: "Invited to Slush, rode in a caravan all the way from London to Helsinki",
      href: "/slush-helsinki",
      external: false,
    },
    {
      year: "2025",
      title: "Building a VR Suit in London",
      desc: "Hardware project — building a full VR suit from the ground up",
      href: "/vr-suit-london",
      external: false,
    },
    {
      year: "2025",
      title: "Conference in Ghana, Africa",
      desc: "Traveled to Ghana for a conference for a grant I won — still editing",
      href: "#",
      external: false,
    },
    {
      year: "2024",
      title: "Tazer Me Elmo",
      desc: "Built this so when my roommates walk near the elmo they would get shocked",
      href: "/tazer-me-elmo",
      external: false,
    },
    {
      year: "2024",
      title: "Hackathon in Boston",
      desc: "Explored Boston and built a robotic arm",
      href: "/hackathon-boston",
      external: false,
    },
    {
      year: "2023",
      title: "Sleeping in the airport",
      desc: "Moving to San Francisco for the year",
      href: "/sleeping-in-the-airport",
      external: false,
    },
    {
      year: "2023",
      title: "Flying to San Francisco",
      desc: "Got a referral at Google and met wonderful people",
      href: "/flying-to-sf",
      external: false,
    },
    {
      year: "2023",
      title: "Learnt how to weld",
      desc: "Welded a really cool piece together at the end of the day",
      href: "/learning-to-weld",
      external: false,
    },
    {
      year: "2023",
      title: "Bubbel iOS",
      desc: "iOS development for a social media app",
      href: "https://github.com/joinbubbel/bubbel-ios",
      external: true,
    },
    {
      year: "2023",
      title: "Haunted House Hackathon",
      desc: "Oct 28–29 in Downtown Chicago",
      href: "https://github.com/hackclub/www-hauntedhouse",
      external: true,
    },
    {
      year: "2022",
      title: "Sinerider",
      desc: "A game about love and graphing, built by teenagers",
      href: "https://github.com/hackclub/sinerider",
      external: true,
    },
  ];

  return (
    <div className="w-full mt-8">
      <div className="flex items-center gap-2 font-mono text-xs mb-4">
        <button
          onClick={() => setTab("projects")}
          className={`px-3 py-1 rounded transition-colors ${
            tab === "projects"
              ? "bg-gray-100 text-gray-800"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          projects
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => setTab("writings")}
          className={`px-3 py-1 rounded transition-colors ${
            tab === "writings"
              ? "bg-gray-100 text-gray-800"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          writings
        </button>
      </div>

      {tab === "projects" && (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 shrink-0 bg-gray-100 rounded overflow-hidden">
                  {item.thumb && (
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 font-mono text-[12px] shrink-0">{item.year}</span>
                    <span className="font-mono text-[14px] text-blue-500 group-hover:underline truncate">{item.title}</span>
                  </div>
                  {item.desc && (
                    <p className="font-mono text-[12px] text-gray-500 truncate">{item.desc}</p>
                  )}
                </div>
              </a>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-3 group hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 shrink-0 bg-gray-100 rounded overflow-hidden">
                  {item.thumb && (
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 font-mono text-[12px] shrink-0">{item.year}</span>
                    <span className="font-mono text-[14px] text-blue-500 group-hover:underline truncate">{item.title}</span>
                  </div>
                  {item.desc && (
                    <p className="font-mono text-[12px] text-gray-500 truncate">{item.desc}</p>
                  )}
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
      )}

      {tab === "writings" && (
        <div>
          {writings.length === 0 ? (
            <p className="font-mono text-[13px] text-gray-400 p-2">
              Nothing here yet — writing soon.
            </p>
          ) : (
            <ul className="space-y-3">
              {writings.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="flex items-center gap-3 group hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 font-mono text-[12px] shrink-0">
                          {post.date?.slice(0, 4)}
                        </span>
                        <span className="font-mono text-[14px] text-blue-500 group-hover:underline truncate">
                          {post.title}
                        </span>
                      </div>
                      {post.description && (
                        <p className="font-mono text-[12px] text-gray-500 truncate">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
