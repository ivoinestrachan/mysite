import Image from "next/image";

const Portfolio = () => {
  const journeyData = {
    journey: [
      {
        date: "March 1st 2023",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059653/IMG_7261_rbog4t.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059664/IMG_7266_eyprve.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059658/IMG_7259_idd6tr.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697119217/IMG_3306_from_Hack_Club_via_Slack_ui6irr.jpg"
        ],
        title: "Flying to San Francisco",
        desc: "I flew to san francisco with the hope of getting an internship and meeting wonderful new people and building cool project i was able to get a referral at google.",
      },
      {
        date: "Feb 8th 2022",
        github: "Sinerider",
        lang: "🟡 Javascript",
        githubbio: "💖 A game about love and graphing, built by teenagers.",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697062291/Ivoine_Journey_xqoj1o.png",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697062288/Ivoine_Journey_1_._dxyzox.png",
        ],
        link: "https://github.com/hackclub/sinerider",
        youtubeEmbed: {
          src: "https://www.youtube.com/embed/35nDYoIwiA8?si=-tdWWjk70juv33Vh",
          title: "Sinerider",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          width: 370,
          height: 315,
          allowfullscreen: true
        }
      },
      {
        date: "Aug 10th 2023",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697064339/Sike_Thinking_Image_h9imli.png",
        ],
        githubbio: "ios development for a social media app",
        lang: "🟠 Swift",
        github: "Bubbel IOS",
        link: "https://github.com/joinbubbel/bubbel-ios",
      },
      {
        date: "Jan 20th 2023",
        lang: "🔵 Typescript",
        github: "microsoft/vscode",
        githubbio: "Visual Studio Code",
        link: "https://github.com/microsoft/vscode",
      },
      {
        date: "May 25th 2023",
        video:
          "https://res.cloudinary.com/dxmrcocqb/video/upload/v1697065947/4400075460677380078img_8093.MP4_-_Ivoine_Journey_teykpr.mp4",
        title: "Learnt how to weld",
        desc: "During my stay in the bay area I learnt how to weld which was pretty cool. I welded a really cool piece together at the end of the day.",
      },
      {
        date: "Oct 1st 2023",
        lang: "🔵 Typescript",
        github: "Haunted House",
        githubbio:
          "🎃 Where Fright Meets Byte: A Haunted House Hackathon Experience. Oct 28th to 29th 2023 in Downtown Chicago",
        link: "https://github.com/hackclub/www-hauntedhouse",
      },
    ],
  };

  return (
    <div className="sm:bg-black sm:w-[280%] w-full sm:h-screen sm:mt-3 rounded-[8px] px-5">
      <div className="font-bold sm:text-[42px] text-[32px]  pt-10 sm:text-white">
        Me being creative
      </div>
      <div className="text-gray-400 text-[20px] font-medium">
        Showing my journey and what im working on!
      </div>

      <div className="sm:overflow-y-auto h-[80vh] mt-5 sm:w-[900px]">
        {journeyData.journey.map((item, index) => (
          <div key={index}>
            <p className="sm:text-gray-300 mt-5">{item.date}</p>
            <div className="flex items-center gap-4 flex-wrap  sm:justify-start justify-center mt-2">
              {item.image &&
                //@ts-ignore
                item.image.map((imageUrl, imgIndex) => (
                  <div key={imgIndex} className="mx-2">
                    <Image
                      src={imageUrl}
                      alt={`${item.date} Image ${imgIndex + 1}`}
                      width={350}
                      height={350}
                      className="flex items-center rounded-[5px]"
                    />
                  </div>
                ))}

{item.youtubeEmbed && (
  <div key={`youtube-${index}`} className="mt-2">
    <iframe
      width={item.youtubeEmbed.width}
      height={item.youtubeEmbed.height}
      src={item.youtubeEmbed.src}
      title={item.youtubeEmbed.title}
      allow={item.youtubeEmbed.allow}
      frameBorder="0"
      allowFullScreen={item.youtubeEmbed.allowfullscreen}
    />
  </div>
)}

            </div>

            {item.video && (
              <div key={`video-${index}`} className="mt-2">
                <video controls width={400} height={400}>
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>
            )}
            <p className="sm:text-white mt-5 font-bold text-[24px]">{item.title}</p>
            <a href={item.link}>
              <div
                className={`border rounded-md pl-3 py-3 sm:w-[50%] ${
                  item.github ? "border-gray-400" : "border-none"
                }`}
              >
                {item.github && (
                  <p className="text-blue-500 font-bold">{item.github}</p>
                )}
                {item.lang && <p className="sm:text-white">{item.lang}</p>}
                <p className="sm:text-white">{item.githubbio}</p>
              </div>
            </a>
            <p className="sm:text-white sm:w-[500px] w-[300px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
