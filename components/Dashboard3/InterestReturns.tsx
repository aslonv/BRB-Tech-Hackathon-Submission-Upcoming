interface InterestReturnsProps {
    returns: {
      id: string;
      projectName: string;
      investedAmount: number;
      interestRate: number;
      returnDate: string;
    }[];
  }
  
  const InterestReturns: React.FC<InterestReturnsProps> = ({ returns }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Interest-Based Returns</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invested Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {returns.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.investedAmount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.interestRate}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.returnDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Claim</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default InterestReturns;
  