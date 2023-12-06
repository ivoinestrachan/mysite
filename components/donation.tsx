import useSWR from "swr";

interface Donor {
  name: string;
}

interface Donation {
  id: string;
  donor: Donor;
  amount_cents: number;
}

interface Props {
  donations: Donation[];
}

const Donations = (props: Props) => {
  const url = "https://bank.hackclub.com/api/v3/organizations/ivoine/donations";
  const { data, error } = useSWR(url);

  const getTotalAmount = (donations: Donation[]) => {
    return (
      donations.reduce((total, donation) => total + donation.amount_cents, 0) /
      100
    );
  };
  const donationsToShow = data || props.donations;
  const totalAmount = getTotalAmount(donationsToShow);

  if (error) return <div>Error loading donations.</div>;
  if (!donationsToShow) return <div>Loading...</div>;

  return (
    <div className="mt-2">
      <div><span className="font-bold">Goal: </span>${totalAmount.toFixed(2)} / $4,000</div>
      {donationsToShow.map((donation: Donation) => (
        <div key={donation.id}>
          <div className="flex text-center gap-2 bg-green-400 sm:w-[50%] border-b py-2 pl-2">
            <span className="text-[18px] uppercase">
              DONATION FROM {donation.donor.name}
            </span>
            <span className="text-[18px]">
              ${donation.amount_cents / 100}.00
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const url = "https://bank.hackclub.com/api/v3/organizations/ivoine/donations";

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: { donations: data },
    };
  } catch (error) {
    console.error("Failed to fetch donations:", error);
    return {
      props: { donations: [] },
    };
  }
};

export default Donations;
