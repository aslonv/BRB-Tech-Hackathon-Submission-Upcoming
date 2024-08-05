interface EquitySharesProps {
    shares: {
      id: string;
      projectName: string;
      sharesOffered: number;
      pricePerShare: number;
    }[];
  }
  
  const EquityShares: React.FC<EquitySharesProps> = ({ shares }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Equity Shares</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares Offered</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Per Share</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {shares.map((share) => (
              <tr key={share.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{share.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{share.sharesOffered}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${share.pricePerShare}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EquityShares;
  