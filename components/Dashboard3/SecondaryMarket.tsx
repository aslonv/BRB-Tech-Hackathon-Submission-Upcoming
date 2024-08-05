interface SecondaryMarketProps {
    investments: {
      id: string;
      projectName: string;
      amountInvested: number;
      marketPrice: number;
    }[];
  }
  
  const SecondaryMarket: React.FC<SecondaryMarketProps> = ({ investments }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Secondary Market</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Invested</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {investments.map((investment) => (
              <tr key={investment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{investment.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${investment.amountInvested}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${investment.marketPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-4 py-2 bg-green-600 text-white rounded">Sell</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SecondaryMarket;
  