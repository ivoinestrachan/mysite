import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const PRESET_AMOUNTS = [10, 25, 50] as const;
const DONATION_BASE_URL = "https://hcb.hackclub.com/donations/start/ivoine";

const Donate: NextPage = () => {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  useEffect(() => {
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);

  const customAmount = Number.parseFloat(custom);
  const amount =
    custom.trim() !== "" && !Number.isNaN(customAmount) && customAmount > 0
      ? customAmount
      : selected;

  const isValid = amount !== null && amount > 0;

  const handlePreset = (value: number) => {
    setSelected(value);
    setCustom("");
  };

  const handleCustomChange = (value: string) => {
    setCustom(value);
    setSelected(null);
  };

  const handleDonate = () => {
    if (!isValid || amount === null) return;
    const cents = Math.round(amount * 100);
    window.location.href = `${DONATION_BASE_URL}?amount=${cents}`;
  };

  return (
    <div className="max-w-5xl mx-auto sm:px-6 px-4">
      <Head>
        <title>Helping grandmother</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Help support my grandmother while she is in the hospital. Every donation makes a difference."
        />
      </Head>

      <div className="mt-[130px] grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3">
          <h1 className="font-bold sm:text-[32px] text-[24px]">
            Support my grandmother
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            My name is Ivoine, a 21 year old builder and jack of all trades from
            The Bahamas. I grew up without electricity and taught myself to code
            on my phone. Since then I&apos;ve been obsessed with making things,
            from game development on Roblox as a kid to building hardware and
            software today. Building is how I make sense of the world and how I
            try to give back.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            My grandmother raised me after I lost my mother at 16, and she means
            everything to me. She is the reason I never gave up. She kept me
            fed, kept me believing, and pushed me to chase things far bigger
            than where we came from. Everything I&apos;ve built, I&apos;ve built
            because of her.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            She recently suffered a stroke and is in the hospital back home. I
            am raising funds to fly back to The Bahamas to take care of her and
            to cover her medical costs. Right now I want to be there for her the
            way she has always been there for me.
          </p>

          <div className="mt-6">
            <div className="font-bold">What your donation covers</div>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span>Flight home to The Bahamas to care for her</span>
                <span className="font-semibold whitespace-nowrap ml-4">$1,200</span>
              </li>
              <li className="flex justify-between">
                <span>MRI / CT scan with contrast</span>
                <span className="font-semibold whitespace-nowrap ml-4">$660</span>
              </li>
              <li className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                <span>Total needed</span>
                <span className="whitespace-nowrap ml-4">$1,860</span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Anything you can give helps, and it means a lot to me. Thank you.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 md:col-span-2 md:sticky md:top-8">
          <div className="font-bold text-[18px]">Choose an amount</div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            {PRESET_AMOUNTS.map((value) => (
              <button
                key={value}
                onClick={() => handlePreset(value)}
                className={`font-bold text-[20px] py-3 rounded-xl border transition-colors ${
                  selected === value
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-black border-gray-300 hover:border-green-500"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">
              Custom amount
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 focus-within:border-green-500">
              <span className="text-gray-500 text-[18px]">$</span>
              <input
                type="number"
                min="1"
                step="1"
                inputMode="decimal"
                placeholder="Enter amount"
                value={custom}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-full py-3 pl-2 outline-none text-[18px]"
              />
            </div>
          </div>

          <button
            onClick={handleDonate}
            disabled={!isValid}
            className={`w-full font-bold text-[22px] py-3 mt-6 rounded-xl text-white transition-colors ${
              isValid
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {isValid ? `Donate $${amount}` : "Donate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
