import React from 'react';
import useInvestments from '../hooks/useInvestments';

const InvestmentList: React.FC = () => {
  const { investments, loading, error } = useInvestments();

  if (loading) return <p>Loading investments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Investments</h1>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id} className="mb-4 p-4 border rounded">
            <h2 className="text-lg font-semibold">{investment.projectName}</h2>
            <p><strong>Amount Invested:</strong> ${investment.amountInvested}</p>
            <p><strong>Date:</strong> {investment.date}</p>
            <p><strong>Status:</strong> {investment.returnStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentList;
