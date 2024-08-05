interface RoyaltiesProps {
    royalties: {
      id: string;
      projectName: string;
      percentage: number;
      paymentPeriod: string;
    }[];
  }
  
  const Royalties: React.FC<RoyaltiesProps> = ({ royalties }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Royalties</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {royalties.map((royalty) => (
              <tr key={royalty.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{royalty.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{royalty.percentage}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{royalty.paymentPeriod}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Invest</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Royalties;
  