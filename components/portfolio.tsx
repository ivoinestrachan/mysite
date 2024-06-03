import Image from "next/image";

const Portfolio = () => {
  const journeyData = {
    journey: [
      {
      date: "Febuary 13 2024",
      image: [
        "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717421217/Photo_Jan_19_2024_niucsj.jpg",
      ],
      title: "Tazer Me Elmo",
      desc: "built this so when my roommates walk near the elmo they would get shocked really end up being funny",
    },
      {
        video: [
          "https://res.cloudinary.com/dxmrcocqb/video/upload/v1717357048/IMG_8775_irxq0n.mov",
          "https://res.cloudinary.com/dxmrcocqb/video/upload/v1717357259/IMG_8777_qovcfh.mov",
        ],
        title: "Waymo Activities",
        desc: "Self driving cars!!",
      },
      {
        date: "February 23 2024",
        video:
          "https://res.cloudinary.com/dxmrcocqb/video/upload/v1717355075/Wonderland_video_1416_tskgj7.mp4",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717355546/Alexa_IMG_8200_u96t9f.webp",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717356188/5ae3defc-c1c9-4272-a0a5-387decf8dade.png",
        ],
        title: "Hackathon in Boston",
        desc: "Explored Boston and built a robotic arm",
      },
      {
        date: "Dec 31st 2023",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717354310/Photo_Jan_2_2024_cys0ac.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717354657/IMG_8095_vqreyj.webp",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1717425543/A3C85B2C-0BEB-4880-9BAC-7AA6831F29A6_ukffh4.jpg"
        ],
        title: "Sleeping in the airport",
        desc: "Moving to San Francisco for the year, moving into my apartment with three random people I never met",
      },
      {
        date: "March 1st 2023",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059653/IMG_7261_rbog4t.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059664/IMG_7266_eyprve.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697059658/IMG_7259_idd6tr.jpg",
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697119217/IMG_3306_from_Hack_Club_via_Slack_ui6irr.jpg",
        ],
        title: "Flying to San Francisco",
        desc: "I flew to San Francisco with the hope of getting an internship and meeting wonderful new people and building cool projects. I was able to get a referral at Google.",
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
          allowfullscreen: true,
        },
      },
      {
        date: "Aug 10th 2023",
        image: [
          "https://res.cloudinary.com/dxmrcocqb/image/upload/v1697064339/Sike_Thinking_Image_h9imli.png",
        ],
        githubbio: "iOS development for a social media app",
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
        desc: "During my stay in the Bay Area I learnt how to weld which was pretty cool. I welded a really cool piece together at the end of the day.",
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
        Showing my journey and what I'm working on!
      </div>

      <div className="sm:overflow-y-auto h-[80vh] mt-5 sm:w-[900px]">
        {journeyData.journey.map((item, index) => (
          <div key={index}>
            <p className="sm:text-gray-300 mt-5">{item.date}</p>
            <p className="sm:text-white mt-5 font-bold text-[24px]">
              {item.title}
            </p>
            <p className="sm:text-white sm:w-[500px] w-[300px]">{item.desc}</p>

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
            <div className="flex items-center gap-4 flex-wrap sm:justify-start justify-center mt-2">
              {item.image &&
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

            {item.video && Array.isArray(item.video) ? (
              item.video.map((videoUrl, vidIndex) => (
                <div key={`video-${index}-${vidIndex}`} className="mt-2">
                  <video controls width={400} height={400}>
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </div>
              ))
            ) : (
             <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
