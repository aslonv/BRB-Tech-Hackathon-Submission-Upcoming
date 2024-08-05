interface LoanOfferProps {
    offers: {
      id: string;
      amount: number;
      interestRate: number;
      duration: string;
      description: string;
    }[];
  }
  
  const LoanOffer: React.FC<LoanOfferProps> = ({ offers }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Loan Offers</h1>
        <ul className="divide-y divide-gray-200">
          {offers.map((offer) => (
            <li key={offer.id} className="p-4 flex justify-between border border-gray-200 rounded mb-4">
              <div>
                <h2 className="text-lg font-semibold">{offer.amount}</h2>
                <p>Interest Rate: {offer.interestRate}%</p>
                <p>Duration: {offer.duration}</p>
                <p>{offer.description}</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Apply</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LoanOffer;
  