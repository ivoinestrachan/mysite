import Image, { StaticImageData } from "next/image";
import shenzhen1 from "../assets/IMG_3871.jpg";

interface Item {
  year: string;
  title: string;
  desc: string;
  href: string;
  external: boolean;
  thumb?: StaticImageData | string;
}

const Portfolio = () => {
  const items: Item[] = [
    {
      year: "2026",
      title: "Shenzhen, China",
      desc: "Currently here — building robots and meeting people",
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
      year: "2024",
      title: "Tazer Me Elmo",
      desc: "Built this so when my roommates walk near the elmo they would get shocked",
      href: "/tazer-me-elmo",
      external: false,
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717421217/Photo_Jan_19_2024_niucsj.jpg",
    },
    {
      year: "2024",
      title: "Hackathon in Boston",
      desc: "Explored Boston and built a robotic arm",
      href: "/hackathon-boston",
      external: false,
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717355546/Alexa_IMG_8200_u96t9f.webp",
    },
    {
      year: "2023",
      title: "Sleeping in the airport",
      desc: "Moving to San Francisco for the year",
      href: "/sleeping-in-the-airport",
      external: false,
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717354310/Photo_Jan_2_2024_cys0ac.jpg",
    },
    {
      year: "2023",
      title: "Flying to San Francisco",
      desc: "Got a referral at Google and met wonderful people",
      href: "/flying-to-sf",
      external: false,
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059653/IMG_7261_rbog4t.jpg",
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
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697064339/Sike_Thinking_Image_h9imli.png",
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
      thumb: "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697062291/Ivoine_Journey_xqoj1o.png",
    },
  ];

  return (
    <div className="w-full mt-8">
      <div className="inline-block bg-gray-100 text-gray-500 text-xs font-mono px-3 py-1 rounded mb-4">
        work
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
