import useSWR from "swr";
import { useState } from "react";

interface Donor {
  name: string;
}

interface Donation {
  id: string;
  donor: Donor;
  amount_cents: number;
}

interface DonationsProps {
  initialDonations: Donation[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Donations = ({ initialDonations }: DonationsProps) => {
  const { data, error } = useSWR<Donation[]>(
    "https://bank.hackclub.com/api/v3/organizations/ivoine/donations",
    fetcher
  );
  const [showOverlay, setShowOverlay] = useState(false);

  if (error) return <div>Error loading donations.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="mt-2">
      {data.slice(0, 2).map((donation: Donation) => (
        <div
          key={donation.id}
        >
          <div className="text-[18px] uppercase">
           {donation.donor.name}
          </div>
          <div className="text-[18px] mb-2">${donation.amount_cents / 100}.00</div>
        </div>
      ))}
      <button className="text-[18px]" onClick={() => setShowOverlay(true)}>
        See All
      </button>

      {showOverlay && (
        <div className="overlay" onClick={() => setShowOverlay(false)}>
          {data.slice(0, 10).map((donation: Donation) => (
            <div
              key={donation.id}
              className={`flex text-center gap-2 ${
                donation.amount_cents > 24000 ? "ts" : "bg-green-400"
              } sm:w-[50%] w-full border-b py-2 pl-2`}
            >
              <span className="text-[18px] uppercase">
                DONATION FROM {donation.donor.name}
              </span>
              <span className="text-[18px]">
                ${donation.amount_cents / 100}.00
              </span>
            </div>
          ))}
          <button
            className="text-white text-[20px]"
            onClick={() => setShowOverlay(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Donations;
