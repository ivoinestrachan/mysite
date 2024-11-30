import Image from "next/image";
import placeholder from "../assets/group.svg";
import { useEffect, useRef, useState } from "react";
import Donations from "../components/donation";
import Raised from "../components/Raised";
import Donated from "../components/Donated";
import Story from "../components/Story";

interface Donor {
  name: string;
}

interface Donation {
  id: string;
  donor: Donor;
  amount_cents: number;
}

const fund = () => {

  useEffect(() => {
    document.body.style.overflowX = "auto";
    document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "hidden";
    };
  }, []);
  
  const [donations, setDonations] = useState<Donation[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("https://bank.hackclub.com/api/v3/organizations/ivoine/donations")
      .then((response) => response.json())
      .then((data) => {
        const lastThreeDonations = data.slice(0, 4);
        setDonations(lastThreeDonations);
      })
      .catch((error) => console.error("Error fetching donations:", error));
  }, []);

  const donateRef = useRef<HTMLDivElement>(null);

  const totalAmountCents = donations.reduce(
    (acc, donation) => acc + donation.amount_cents,
    0
  );
  const totalAmountUSD = totalAmountCents / 100;
  const numberOfDonations = donations.length;

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

  const handleShareClick = () => {
    navigator.clipboard.writeText("https://hcb.hackclub.com/donations/start/ivoine")
      .then(() => {
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
      })
      .catch((err) => console.error("Error copying to clipboard", err));
  };

  return (
    <div className="sm:px-20 px-2 ">
      <div className="font-bold sm:text-[27px]  text-[20px] mt-[130px]">
        Getting a lawyer for 01 visa and supporting my trip to San Francisco
      </div>

      <div className="mt-5 sm:flex sm:space-x-[120px] ">
        <div>
          <Image
            src={placeholder}
            alt=""
            className="border rounded-md border-black shadow-md sm:w-[700px] "
          
          />

          <Story />
        </div>

        <div className="bg-white shadow-xl h-[65vh]  rounded-lg sm:pr-10 sm:pl-10">
          <Raised totalAmountUSD={totalAmountUSD} />
          <Donated numberOfDonations={numberOfDonations} />

          <div className="text-center mt-10">
          <button
              onClick={handleShareClick} 
              className="font-bold text-[24px] py-2 pl-[128px] pr-[128px] text-white bg-green-500 rounded-xl"
            >
              {copied ? "Copied!" : "Share"}
            </button>
          </div>

          <div className="text-center mt-4">
            <a href="https://hcb.hackclub.com/donations/start/ivoine">
            <button className="font-bold text-[24px] py-2 pl-[92px] pr-[92px] text-white bg-green-500 rounded-xl">
              Donate now
            </button>
            </a>
          </div>

          <div className="px-10 mt-5">
            <Donations initialDonations={donations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default fund;
