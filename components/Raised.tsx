interface RaisedProps {
  totalAmountUSD: number;
}

const Raised = ({ totalAmountUSD }: RaisedProps) => {
  return (
    <div className="text-[24px] font-medium px-5 mt-10">
      ${totalAmountUSD.toFixed(2)} USD raised
    </div>
  );
};

export default Raised;
