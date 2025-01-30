import Image from "next/image";
import vale from "../assets/valentines.png";

const Letter = () => {
  return (
    <div className="font-mono text-[20px] w-full ">
      <div className="border border-1 border-black h-[820px] mt-[30px]  ml-[40px] mr-[40px] flex">
        <div className="px-4 mt-[200px] w-full">Dear Future Wife</div>
        <div className=" mt-[250px] absolute w-[65%] px-4">
          Hi there, I want you to know that I really love you and over these
          paths month I have grewn alot because you opened my eyes alot. Im
          looking forward to spending time and my life with you I know its only
          been like 3/4months. Im really happy I met you, I love youre laugh,
          youre voice, youre silly billy clownly bozo 🤡 self. I know it will
          take time for you to heal and I respect that and im happy that your
          healing very proud of you. Happy when Im with you or when I think of
          you, I love you so much Latavia Hunte and thank you so much for being
          my girlfriend & valentine. Im really looking forward to meeting you
          again in march I will cherish the time we spend together. A little
          poem I thought of on the go, You are like a seed the more I water you
          with love you grow, and blossom into a beautiful woman who you are and
          continuing to keep growing. Bees come to you because youre sweet and
          you have the <b>lush</b> Pollen.
        </div>

        <div className="flex">
          <div className="right-[30rem] absolute mt-4">
            <div>Happy Valentines</div>
            <div className="mt-5">27th Jan, 2025</div>
          </div>
          <Image
            src={vale}
            alt="vale"
            className="right-[2.5rem] absolute"
            width={400}
            height={400}
          />
        </div>
        <Image
          src={
            "https://cloud-hgfhu8yh1-hack-club-bot.vercel.app/0signature.png"
          }
          className="bottom-10 absolute right-0"
          draggable="false"
          width={350}
          height={350}
          alt="signature"
        />
      </div>
    </div>
  );
};

export default Letter;
