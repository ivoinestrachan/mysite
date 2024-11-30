interface DonatedProps {
  numberOfDonations: number;
}

const Donated = ({ numberOfDonations }: DonatedProps) => {
  return (
    <div className="text-[18px] px-5 text-gray-500">
    $2.5k goal . {numberOfDonations} donations
    </div>
  );
};

export default Donated;
