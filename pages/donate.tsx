import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const PRESET_AMOUNTS = [10, 25, 50] as const;
const DONATION_BASE_URL = "https://hcb.hackclub.com/donations/start/ivoine";
const GOAL_AMOUNT = 3300;
const RAISED_AMOUNT = 1005;

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

  const percentRaised = (RAISED_AMOUNT / GOAL_AMOUNT) * 100;

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
        <title>Help me recover from a broken shinbone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I was hit by a car while riding my bike and fractured the top of my shinbone. I'm raising money for scans, a clinic visit, and physical therapy. Every donation makes a difference."
        />
      </Head>

      <div className="mt-[130px] grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-3">
          <h1 className="font-bold sm:text-[32px] text-[24px]">
            Help me recover from a broken shinbone
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I got hit by a car while I was riding my bike. I kept putting off
            going to the clinic because I knew I couldn&apos;t afford the bill,
            and I was hoping it would heal on its own. I finally went in for a
            follow-up today and they did another scan. The top of my shinbone is
            fractured.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I&apos;ve been wearing a brace to keep my leg in the right position,
            and the doctor, Frank H. Valone, said I should start treatment. I
            filed a police report after the crash and I&apos;m hoping the
            investigation leads somewhere, that they catch the driver and that
            the hospital bill gets covered. But the clinic needs to be paid
            either way, so the visit and the scans are still on me, and I
            can&apos;t work right now, so the bills are piling up.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/donate/crutches.jpeg"
                alt="Ivoine standing in the hospital hallway with crutches"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/donate/hospital-bed.jpeg"
                alt="Ivoine in a hospital bed after the crash"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/donate/scan-room.jpeg"
                alt="Getting a scan at the clinic"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
            <span>San Francisco Police Department report</span>
            <span className="text-gray-400">·</span>
            <span>Case 260 678 807</span>
            <span className="text-gray-400">·</span>
            <a
              href="/donate/police-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 underline hover:text-green-700"
            >
              View PDF
            </a>
          </div>

          <div className="mt-6">
            <div className="font-bold">What your donation covers</div>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span>MRI / X-ray</span>
                <span className="font-semibold whitespace-nowrap ml-4">$1,000</span>
              </li>
              <li className="flex justify-between">
                <span>Clinic visit</span>
                <span className="font-semibold whitespace-nowrap ml-4">$300</span>
              </li>
              <li className="flex justify-between">
                <span>Physical therapy (12 recommended sessions)</span>
                <span className="font-semibold whitespace-nowrap ml-4">$2,000</span>
              </li>
              <li className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                <span>Total needed</span>
                <span className="whitespace-nowrap ml-4">$3,300</span>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Thanks for reading, and for anything you can give. It really means a
            lot.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 md:col-span-2 md:sticky md:top-8">
          <div className="mb-6">
            <div className="flex items-baseline justify-between">
              <span className="font-bold text-[24px]">
                ${RAISED_AMOUNT.toLocaleString()}
              </span>
              <span className="text-gray-500 text-sm">
                raised of ${GOAL_AMOUNT.toLocaleString()} goal
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
              <div
                className="bg-green-500 h-3 rounded-full transition-all"
                style={{
                  width: `${Math.min(100, percentRaised)}%`,
                }}
              />
            </div>
            <div className="text-gray-500 text-sm mt-2">
              {percentRaised > 0 && percentRaised < 1
                ? "Less than 1% of the way there"
                : `${Math.round(percentRaised)}% of the way there`}
            </div>
          </div>

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
